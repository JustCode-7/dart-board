import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {PlayerService} from './player.service';
import {DEFAULT_PLAYER, HistoryEntry, Player, Throw} from "../models/player/player.model";
import {SwitchPlayerSnackComponent} from "../dialogTemplates/switch-player-snack/switch-player-snack.component";
import {BehaviorSubject, Subject} from "rxjs";
import {HistoryDialog, HistoryDialogData} from "../dialogTemplates/history-dialog/history-dialog.component";
import {RoundCountService} from "./round-count.service";
import {ExplosionAnimationService} from "../shared/animation/explosion-animation.service";
import {GameType} from "../models/enum/GameType";
import {GameStoreService} from "./game-store.service";
import {Game} from "../models/game/game.model";
import {VictoryDialog} from "../dialogTemplates/victory-dialog/victory-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";


export const MAX_REMAINING_THROWS = 3;


@Injectable({
  providedIn: 'root'
})
export class CurrentPlayerService {
  private roundCountService = inject(RoundCountService);
  private gameStore = inject(GameStoreService);
  currentGameMode = ""
  public _remainingThrows = MAX_REMAINING_THROWS;
  public _accumulatedPoints = 0;
  public _remainingPointsToDisplay = signal(0);
  public _currentPlayer: BehaviorSubject<Player> = new BehaviorSubject(DEFAULT_PLAYER);
  public _last3History: number[] = [];
  public _lastTurnSum = 0;
  public _lastTurnHits: number[] = [];
  public _lastCricketHistory: Map<number, number> = new Map();
  protected animationService = inject(ExplosionAnimationService)
  public _history: HistoryEntry[] = [];

  private aiTurnSubject = new Subject<void>();
  public aiTurn$ = this.aiTurnSubject.asObservable();

  // undo - workaround
  last3HisSignal = signal(this._last3History);
  private lastClickedButton: HTMLElement | null = null;
  isTooLong = computed(() => this.last3HisSignal().length > 2);
  public isAITurn = signal(false);

  private updateButtonStatesEffect = effect(() => {
    const shouldDisable = this.isTooLong();
    this.updateButtonStates(shouldDisable);
  });

  private trajectoryEffect = effect(() => {
    const last3 = this.last3HisSignal();
    const isAi = this.isAITurn();
    if (last3.length > 0) {
      // Wenn KI am Zug ist, suchen wir das Element anhand der ID, da kein direkter Klick registriert wurde
      if (isAi && !this.lastClickedButton) {
        // Wir nehmen den letzten Wert aus dem Array um das Element zu finden
        // ACHTUNG: Das funktioniert nur, wenn wir wissen, welcher Wert geworfen wurde.
        // Die AI ruft performClick auf, was document.getElementById nutzt.
        // Wir setzen lastClickedButton in performClick
      }

      if (this.lastClickedButton) {
        const verticalButtons = Array.from(document.querySelectorAll('.dart-buttons-vertical button'));
        // Die Buttons im HTML sind in der Reihenfolge: Wurf 3, Wurf 2, Wurf 1
        // last3HisSignal[0] ist Wurf 1
        // last3HisSignal[1] ist Wurf 2
        // last3HisSignal[2] ist Wurf 3
        // Also:
        // length 1 -> Ziel ist verticalButtons[2] (letzter im DOM)
        // length 2 -> Ziel ist verticalButtons[1]
        // length 3 -> Ziel ist verticalButtons[0] (erster im DOM)
        const targetIndex = 3 - last3.length;
        const target = verticalButtons[targetIndex] as HTMLElement;

        if (target) {
          const source = this.lastClickedButton;
          this.lastClickedButton = null;
          // Kurze Verzögerung, damit das UI aktualisiert wurde
          setTimeout(() => {
            this.animationService.showTrajectory(source, target);
          }, 50);
        }
      }
    }
  });

  public setLastClickedButton(btn: HTMLElement | null) {
    this.lastClickedButton = btn;
  }

  constructor(private playerService: PlayerService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog) {
  }

  public isUIBlocked(): boolean {
    const dialogs = document.querySelectorAll('.mat-mdc-dialog-container');
    return dialogs.length > 0;
  }

  private triggerAIIfActive() {
    const player = this._currentPlayer.value;
    const isDialogOpen = this.isUIBlocked();

    if (player && player.isAI && this.hasThrowsRemaining()) {
      if (isDialogOpen) {
        console.warn("KI trigger postponed: UI blocked (dialog open) for ", player.name);
        return;
      }

      // Ensure we don't trigger AI if a snackbar is about to open or just closed
      setTimeout(() => {
        this.aiTurnSubject.next();
      }, 500); // Increased delay for stability
    }
  }

  private updateButtonStates(disabled: boolean) {
    const host = document.querySelector('app-dart-board') || document.querySelector('app-cricket-component');
    if (!host) return;

    const buttons = host.getElementsByTagName("button");

    for (const btn of Array.from(buttons)) {
      const text = btn.innerText.trim().toUpperCase();
      if (text !== 'OK' && text !== 'REVERT') {
        btn.disabled = disabled;
      }
    }
  }

  init(player: Player) {
    this._currentPlayer.next(player);
    this._remainingPointsToDisplay.set(player.remainingPoints);
    this._lastCricketHistory = new Map(player.cricketMap);
    this._last3History = [];
    this.last3HisSignal.set([]);
    this.isAITurn.set(player.isAI ?? false);
    this.reset();

    // Initialen Snapshot im Store speicherns
    this.gameStore.initGame(this.currentGameMode as GameType, this.playerService._players);

    this.triggerAIIfActive();
  }

  getCurrentGameState(): Game {
    return {
      gameType: this.currentGameMode as GameType,
      players: this.playerService._players,
      currentPlayerIndex: this.playerService._players.indexOf(this._currentPlayer.value),
      roundCount: this.roundCountService.roundCount,
      remainingThrows: this._remainingThrows,
      accumulatedPoints: this._accumulatedPoints
    };
  }

  captureState() {
    this.gameStore.saveSnapshot(this.getCurrentGameState());
  }

  setCurrentGameMode(mode: string) {
    this.currentGameMode = mode;
  }

  switchPlayer(player: Player, isNewRound: boolean) {
    if (isNewRound) {
      this.roundCountService.incrementRoundCount();
    }
    this.animationService.tripleTwentyCounter = 0;
    this.animationService.tripleCounter = 0
    this.animationService.missCounter = 0;

    // Buttons während der Verzögerung sperren
    this.updateButtonStates(true);

    // Verzögerung einbauen, damit der Spieler seine Punkte/Würfe noch sehen kann
    // Daten für die Snackbar sichern, bevor sie zurückgesetzt werden
    this._lastTurnSum = this.getLast3HistorySum();
    this._lastTurnHits = [...this._last3History];

    if (this.roundCountService.getRemainingRounds() === 0) {
      this.displayRoundCountNotification();
    } else {
      const snackRef = this.snackbar.openFromComponent(SwitchPlayerSnackComponent, {
        duration: 3300,
        panelClass: ['app-shape-morph-snack'],
        horizontalPosition: "center",
        verticalPosition: "bottom",
        data: {nextPlayer: player}
      });

      snackRef.afterDismissed().subscribe(() => {
        // Eigentlicher Spielerwechsel erst nach der Snackbar
        this._currentPlayer.next(player);
        this._last3History = [];
        this.last3HisSignal.set([]);
        this._lastCricketHistory = new Map(player.cricketMap);
        this._remainingPointsToDisplay.set(player.remainingPoints);
        this._history = player.history;
        this.reset();
        this.captureState();


        this.updateButtonStates(false);
        // Double check we are still on the same player and it's an AI
        this.triggerAIIfActive();
      });
    }
  }

  private displayRoundCountNotification() {
    this.handleVictoryByReachingRoundLimit();
  }

  private handleVictoryByReachingRoundLimit() {
    const winners = this.getPlayersWithHighestPoints();
    const winner = this.playerService._players.find(p => p.name === winners[0]);
    if (winner) {
      this._currentPlayer.next(winner);
    }

    this.dialog.open(VictoryDialog, {data: {victoryByReachingRoundLimit: true}, disableClose: true});
  }

  private savePointsForStatistics() {
    let playerHistory: HistoryEntry = {sum: 0, hits: []};
    playerHistory.sum = this._accumulatedPoints;
    playerHistory.hits.push(...this._last3History);

    this._currentPlayer.value.history.push(playerHistory);
  }

  private reset() {
    this._remainingThrows = MAX_REMAINING_THROWS;
    this._accumulatedPoints = 0;
    this._last3History = [];
    this.last3HisSignal.set([]);
    if (this._currentPlayer.value) {
      this._currentPlayer.value.last3History = [];
      this.isAITurn.set(this._currentPlayer.value.isAI ?? false);
    }
  }

  scoreElimination(points: number) {
    if (this.hasThrowsRemaining()) {
      this.calcAverage();
      const currentPlayer = this._currentPlayer.value;
      this.captureState();
      // Nur zum Anzeigen der aktuellen Punktzahl
      this._remainingPointsToDisplay.update(value => value + points);
      this._last3History.push(points);
      currentPlayer.last3History = [...this._last3History];
      this.last3HisSignal.update(() => [...this._last3History]);
      this.accumulatePoints(points);
      this.decrementRemainingThrows();
      // Sicherstellen, dass die Referenz im Signal-ähnlichen BehaviorSubject erhalten bleibt
      this._currentPlayer.next(currentPlayer);
    }
  }

  scoreHighscore(points: number) {
    if (this.hasThrowsRemaining()) {
      this.calcAverage();
      const currentPlayer = this._currentPlayer.value;
      this.captureState();
      // Nur zum Anzeigen der aktuellen Punktzahl
      this._remainingPointsToDisplay.update(value => value + points);
      this._last3History.push(points);
      currentPlayer.last3History = [...this._last3History];
      this.last3HisSignal.update(() => [...this._last3History]);
      this.accumulatePoints(points);
      this.decrementRemainingThrows();
      // Sicherstellen, dass die Referenz im Signal-ähnlichen BehaviorSubject erhalten bleibt
      this._currentPlayer.next(currentPlayer);
    }
  }

  score501(points: number) {
    if (this.hasThrowsRemaining()) {
      this.calcAverage();
      const currentPlayer = this._currentPlayer.value;
      this.captureState();
      // Nur zum Anzeigen der aktuellen Punktzahl
      this._remainingPointsToDisplay.update(value => value - points);
      this._last3History.push(points);
      currentPlayer.last3History = [...this._last3History];
      this.last3HisSignal.update(() => [...this._last3History]);
      this.accumulatePoints(points);
      this.decrementRemainingThrows();
      // Sicherstellen, dass die Referenz im Signal-ähnlichen BehaviorSubject erhalten bleibt
      this._currentPlayer.next(currentPlayer);
    }
  }

  scoreCricket(_throw: Throw) {
    if (this.hasThrowsRemaining()) {
      this.calcAverage();
      const currentPlayer = this._currentPlayer.value;
      this.captureState();
      this.evaluateCricketPoints(_throw);
      this._last3History.push(_throw.value * _throw.multiplier);
      currentPlayer.last3History = [...this._last3History];
      this.last3HisSignal.update(() => [...this._last3History]);
      this._remainingPointsToDisplay.set(currentPlayer.remainingPoints + this._accumulatedPoints);
      this.decrementRemainingThrows();
    }
  }

  public hasThrowsRemaining(): boolean {
    return this._remainingThrows > 0;
  }

  private accumulatePoints(points: number) {
    this._accumulatedPoints += points;
  }

  private accumulateCricketPoints(_throw: Throw) {
    if (this.checkForClosedHit(_throw)) {
      this._accumulatedPoints += _throw.value * _throw.multiplier;
    }
  }

  decrementRemainingThrows() {
    this._remainingThrows -= 1;
    // We always check if we should trigger AI after a throw.
    // triggerAIIfActive handles the logic if it's currently AI's turn
    // and if we should skip because it was the last throw (via switchPlayer snackbar callback)
    this.triggerAIIfActive();
  }

  hasNoThrowsRemaining(): boolean {
    return !this.hasThrowsRemaining();
  }

  hasReachedZeroPoints(): boolean {
    const aggregatedRemainingPoints = this._currentPlayer.value.remainingPoints - this._accumulatedPoints;
    return aggregatedRemainingPoints == 0;
  }

  isOvershot(points: number): boolean {
    if (this.currentGameMode === GameType.Highscore) {
      return false;
    }
    if (this.currentGameMode === GameType.Elimination301) {
      const expectedRemainingPoints = this._currentPlayer.value.remainingPoints + this._accumulatedPoints + points;
      return expectedRemainingPoints > 301;
    } else {
      const expectedRemainingPoints = this._currentPlayer.value.remainingPoints - this._accumulatedPoints - points;
      if (this.currentGameMode === GameType.DoubleOut501) {
        return expectedRemainingPoints < 0 || expectedRemainingPoints === 1;
      }
      return expectedRemainingPoints < 0;
    }
  }

  public finalizeTurn(operation: 'add' | 'subtract', shouldSaveStatistics: boolean = true) {
    const player = this._currentPlayer.value;
    player.lastScore = this._accumulatedPoints;
    player.last3History = this._last3History;
    this.last3HisSignal.update(aktuellesArray => [...aktuellesArray = this._last3History]);

    if (operation === 'add') {
      player.remainingPoints += this._accumulatedPoints;
    } else {
      player.remainingPoints -= this._accumulatedPoints;
    }

    this._remainingPointsToDisplay.set(player.remainingPoints);

    if (shouldSaveStatistics) {
      this.savePointsForStatistics();
    }
  }

  /**
   * Average(Dart): Gesamtpunktzahl eines Spielers durch die Anzahl der geworfenen Darts teilen und das Ergebnis mit 3 multiplizieren
   * Average(Cricket): Gesamtpunktzahl aller Runden durch die Anzahl der Runden teilen
   */
  calcAverage() {
    if (this.currentGameMode !== GameType.Cricket) {
      let arr: number[] = [];
      this._currentPlayer.value.history.forEach((entry: HistoryEntry) => {
        entry.hits.forEach((hit: number) => {
          arr.push(hit);
        });
      });
      let geworfeneDarts = arr.length;
      if (geworfeneDarts > 0) {
        let gesamtPunktzahl = arr.reduce((a, b) => +a + +b);
        this._currentPlayer.value.average = Math.round((gesamtPunktzahl / geworfeneDarts) * 3);
      }
    } else {
      if (this._currentPlayer.value.cricketMap.size > 0) {
        this._currentPlayer.value.average = Math.round(this._currentPlayer.value.remainingPoints / this._currentPlayer.value.cricketMap.size);
      }
    }
  }

  isDoubleOut(multiplier: number): boolean {
    return multiplier / 2 == 1;
  }

  evaluateCricketPoints(_throw: Throw) {
    const relevantValues = [15, 16, 17, 18, 19, 20, 25];
    let map = this._currentPlayer.value.cricketMap;
    const value = _throw.value;
    if (value > 0 && relevantValues.includes(value)) { // kein Miss und relevante Zahl
      const multiplier = _throw.multiplier;

      if (map.has(value)) { // wenn der Wert schon im Map ist, heißt schon einmal getroffen
        let totalHitsBefore = map.get(value)!;
        let totalHitsAfter = totalHitsBefore + multiplier;

        if (totalHitsAfter <= 3) {
          map.set(value, totalHitsAfter);
        } else {
          map.set(value, 3);
          // Punkte berechnen für Hits über 3 hinaus
          let pointsMultiplier = totalHitsAfter - 3;
          this.accumulateCricketPoints({value: value, multiplier: pointsMultiplier});
        }
      } else { // wenn der wert noch nicht im Map ist, füge ihn hinzu
        if (multiplier <= 3) {
          map.set(value, multiplier);
        } else {
          map.set(value, 3);
          let pointsMultiplier = multiplier - 3;
          this.accumulateCricketPoints({value: value, multiplier: pointsMultiplier});
        }
      }
    }
    this.sortMap();
    this._currentPlayer.value.throws?.push(_throw);
  }

  sortMap() {
    this._currentPlayer.value.cricketMap = new Map([...this._currentPlayer.value.cricketMap].sort());
  }

  checkForClosedHit(_throw: Throw) {
    if (this.playerService._players.length < 2) {
      return true;
    }

    // Ein Feld ist nur dann für Punkte offen, wenn mindestens EIN Gegner es noch NICHT geschlossen hat.
    return this.playerService._players
      .filter(player => player.id !== this._currentPlayer.value.id)
      .some((player: Player) => (player.cricketMap.get(_throw.value) || 0) < 3);
  }

  isCricketBullClosed(): boolean {
    if (this.currentGameMode !== GameType.Cricket) return false;
    return this.playerService._players.every(player => (player.cricketMap.get(25) || 0) >= 3);
  }

  isCricketNumberClosed(zahl: number): boolean {
    if (this.currentGameMode !== GameType.Cricket) return false;
    return this.playerService._players.every(player => (player.cricketMap.get(zahl) || 0) >= 3);
  }

  showHistory(player?: Player) {
    const data: HistoryDialogData = {
      player: this.playerService.getPlayer(player ?? this._currentPlayer.value),
    }
    if (data.player.history.length > 0) {
      this.dialog.open(HistoryDialog, {data});
    }

  }

  undoLastPlayerActions() {
    const prevState = this.gameStore.undo();
    if (prevState) {
      this.applyState(prevState);
    }
  }

  private applyState(state: Game) {
    this.playerService._players = state.players;
    const currentPlayer = this.playerService._players[state.currentPlayerIndex];
    // WICHTIG: Den Referenz-Check im PlayerService-Array machen
    this._currentPlayer.next(currentPlayer);

    this.roundCountService.roundCount = state.roundCount;
    this._remainingThrows = state.remainingThrows;
    this._accumulatedPoints = state.accumulatedPoints;
    this.isAITurn.set((currentPlayer.isAI ?? false) && state.remainingThrows > 0);
    if (this.currentGameMode === GameType.Highscore ||
      this.currentGameMode === GameType.Elimination301 ||
      this.currentGameMode === GameType.Cricket) {
      this._remainingPointsToDisplay.set(currentPlayer.remainingPoints + state.accumulatedPoints);
    } else {
      this._remainingPointsToDisplay.set(currentPlayer.remainingPoints - state.accumulatedPoints);
    }
    this._history = currentPlayer.history;
    this._last3History = currentPlayer.last3History || [];
    this.last3HisSignal.set([...this._last3History]);
    this._lastCricketHistory = new Map(currentPlayer.cricketMap);
  }

  getLast3HistorySum(): number {
    return this._last3History.reduce((sum, current) => sum + current, 0);
  }

  getPlayersWithHighestPoints(): string[] {
    const players = this.playerService._players;
    if (players.length === 0) {
      return [];
    }

    const maxPoints = Math.max(...players.map(p => p.remainingPoints));
    return players.filter(p => p.remainingPoints === maxPoints).map(players => players.name);
  }

  hasReachedTargetPoints(targetPoints: number) {
    const aggregatedRemainingPoints = this._currentPlayer.value.remainingPoints + this._accumulatedPoints;
    return aggregatedRemainingPoints === targetPoints;
  }
}
