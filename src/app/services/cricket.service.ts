import {Injectable} from '@angular/core';
import {VictoryDialog} from "../dialogTemplates/victory-dialog/victory-dialog.component";
import {Player, Throw} from '../models/player/player.model';
import {CurrentPlayerService} from "./current-player.service";
import {PlayerService} from "./player.service";
import {RoundCountService} from "./round-count.service";
import {MatDialog} from "@angular/material/dialog";
import {GameType} from "../models/enum/GameType";

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  /** Hier muss man sich die ersten 3 Treffer merken für jedes element
   * also 15,16..20,Bull
   *
   * erst danach kann man punkten
   *
   * gewonnen hat der mit den meisten Punkten, nach erreichen des Rundenlimits
   * oder
   * derjenige der alles 3mal getroffen hat && die meisten Punkte hat
   *
   */
  playerNames: string[] = [];
  public _gameType: GameType | string = '';
  public _hideAll: boolean = false;
  private lastPlayerId: number = -1;


  static createPlayer(playerData: any, id: number): Player {
    return {
      id,
      name: (typeof playerData === 'string') ? playerData : playerData.name,
      isAI: (typeof playerData === 'string') ? false : playerData.isAI,
      difficulty: (typeof playerData === 'string') ? undefined : playerData.difficulty,
      remainingPoints: 0,
      lastScore: 0,
      history: [],
      cricketMap: new Map(),
      average: 0,
      last3History: [],
      throws: [],
    };
  }

  constructor(private playerService: PlayerService,
              private currentPlayerService: CurrentPlayerService,
              private dialog: MatDialog,
              private roundCountService: RoundCountService,
  ) {
  }

  setGameType(gameType: string) {
    this._gameType = gameType;
    this.currentPlayerService.setCurrentGameMode(gameType);
  }

  initPlayers(players: any[]) {
    this.roundCountService.reset();
    this.playerService.setupCricketPlayers(players);
    this._hideAll = false;
    this.lastPlayerId = this.playerService._players[this.playerService._players.length - 1].id;
    this.currentPlayerService.init(this.playerService.getFirstPlayer());
  }

  // anpassen
  scoreCricketWithMultiplier(_throw: Throw) {
    this.currentPlayerService.scoreCricket(_throw);
    if (this.cricketWinCheck()) {
      this.currentPlayerService.finalizeTurn('add', this.currentPlayerService._remainingThrows === 0);
      this.handleVictory();
    } else if (this.currentPlayerService.hasNoThrowsRemaining()) {
      this.currentPlayerService.finalizeTurn('add', this.currentPlayerService._remainingThrows === 0);
      this.switchPlayer();
    }
    this.currentPlayerService.sortMap();
  }

  private handleVictory() {
    this._hideAll = true;
    this.dialog.open(VictoryDialog, {disableClose: true});
    // TODO: Open PointsOverview as Option
  }

  private switchPlayer() {
    this.currentPlayerService.switchPlayer(
      this.playerService.getNextPlayer(this.currentPlayerService._currentPlayer.value), this.isNewRound());
    this.setCurrentPlayerAsFristofList();
  }


  isNewRound() {
    return this.currentPlayerService._currentPlayer.value.id == this.lastPlayerId;
  }

  setCurrentPlayerAsFristofList() {
    const current = this.playerService._players.shift();
    this.playerService._players.push(current!);
  }

  /**
   * Der Spieler, der alle Felder ausgeworfen hat und dessen Punktzahl nicht geringer als die eines Gegners ist, gewinnt das Spiel.
   * Der Spieler, der die höchste Punktzahl nach dem Rundenlimit hat, gewinnt das Spiel.
   * Bei Punktgleichheit gewinnt der Spieler mit den meisten ausgeworfenen Feldern.
   * Falls die Anzahl der ausgeworfenen Felder ebenfalls gleich ist,
   * dann gibt es bis zu 10 mögliche zusätzliche Würfe, den Gewinner zu ermitteln.
   * @private
   */
  private cricketWinCheck() {
    // Gewinn-Regel : http://www.startspiele.de/hilfe/darts/game_rules_cricket.html
    if (this.playerHasAllClosed()) {
      const currentPlayerPoints = this.currentPlayerService._currentPlayer.value.remainingPoints + this.currentPlayerService._accumulatedPoints;
      const highestPoints = this.getPlayerWithHighestScoreIncludingAccumulatedPoints();

      if (currentPlayerPoints >= highestPoints) {
        return true;
      }
    }
    return false;
  }

  private getPlayerWithHighestScoreIncludingAccumulatedPoints(): number {
    const players = this.playerService._players;
    let maxPoints = -1;

    for (let i = 0; i < players.length; i++) {
      const points = this.getEffectivePoints(players[i]);
      if (points > maxPoints) {
        maxPoints = points;
      }
    }
    return maxPoints;
  }

  private getEffectivePoints(player: Player): number {
    if (player.id === this.currentPlayerService._currentPlayer.value.id) {
      return player.remainingPoints + this.currentPlayerService._accumulatedPoints;
    }
    return player.remainingPoints;
  }

  private playerHasAllClosed() {
    return Array.from(this.currentPlayerService._currentPlayer.value.cricketMap.values()).every(value => value === 3)
      && this.currentPlayerService._currentPlayer.value.cricketMap.size == 7;
  }

}
