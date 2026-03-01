import {Injectable} from '@angular/core';
import {VictoryDialog} from "../dialogTemplates/victory-dialog/victory-dialog.component";
import {GameType} from '../models/enum/GameType';
import {Player, Throw} from '../models/player/player.model';
import {CurrentPlayerService} from "./current-player.service";
import {PlayerService} from "./player.service";
import {RoundCountService} from "./round-count.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class DartService {
  _gameType: GameType | string = '';
  playerNames: string[] = [];
  public _hideAll: boolean = false;
  private lastPlayerId: number = -1;

  static createPlayer(playerData: any, id: number): Player {
    return {
      id,
      name: (typeof playerData === 'string') ? playerData : playerData.name,
      isAI: (typeof playerData === 'string') ? false : playerData.isAI,
      difficulty: (typeof playerData === 'string') ? undefined : playerData.difficulty,
      remainingPoints: 501,
      lastScore: 0,
      history: [],
      cricketMap: new Map(),
      average: 0,
      last3History: [],
    };
  }

  constructor(private playerService: PlayerService,
              private currentPlayerService: CurrentPlayerService,
              private dialog: MatDialog,
              private snackbar: MatSnackBar,
              private roundCountService: RoundCountService,
  ) {
  }

  setGameType(gameType: GameType) {
    this._gameType = gameType;
    this.currentPlayerService.setCurrentGameMode(gameType);
  }

  initPlayers(players: any[]) {
    this.roundCountService.reset();
    this.playerService.setupDartPlayers(players);
    this.playerNames = players.map(p => typeof p === 'string' ? p : p.name);

    // Initialize starting points based on game type
    if (this._gameType === GameType.Elimination301 || this._gameType === GameType.Highscore) {
      // Elimination/Highscore starts at 0 points and counts upwards
      this.playerService._players.forEach(p => p.remainingPoints = 0);
    } else {
      // Ensure 501 start for classic modes
      this.playerService._players.forEach(p => p.remainingPoints = 501);
    }

    this._hideAll = false;
    this.lastPlayerId = this.playerService._players[this.playerService._players.length - 1].id;
    this.currentPlayerService.init(this.playerService.getFirstPlayer());
  }

  score(_throw: Throw) {
    const points = _throw.value * _throw.multiplier;
    if (this.currentPlayerService.isOvershot(points)) {
      this.displayOvershotNotification().afterDismissed().subscribe(() => {
        this.switchPlayer();
      })
    } else {
      if (this._gameType === GameType.Elimination301) {
        this.scoreElimination(points);
        return;
      }

      if (this._gameType === GameType.Highscore) {
        this.scoreHighscore(points);
        return;
      }
      if (this._gameType === GameType.DoubleOut501) {
        this.currentPlayerService.score501(points);
        this.checksFor501DoubleOut(_throw.multiplier);
        return;
      }
      if (this._gameType === GameType.Simple501) {
        this.currentPlayerService.score501(points);
        this.checksFor501();
        return;
      }
    }
  }

  private checksFor501() {
    if (this.currentPlayerService.hasReachedZeroPoints()) {
      this.currentPlayerService.finalizeTurn('subtract');
      this.handleVictory();
    } else if (this.currentPlayerService.hasNoThrowsRemaining()) {
      this.currentPlayerService.finalizeTurn('subtract');
      this.switchPlayer();
    }
  }

  private scoreHighscore(points: number) {
    this.currentPlayerService.scoreHighscore(points);
    if (this.roundCountService.getRemainingRounds() == 0 && this.isNewRound() && this.currentPlayerService.hasNoThrowsRemaining()) {
      this.currentPlayerService.finalizeTurn('add');
      this.handleVictoryByReachingRoundLimit();
    } else if (this.currentPlayerService.hasNoThrowsRemaining()) {
      this.currentPlayerService.finalizeTurn('add');
      this.switchPlayer();
    }
  }

  private scoreElimination(points: number) {
    // Add points for current throw to the display/accumulator
    this.currentPlayerService.scoreElimination(points);

    // Determine target based on elimination mode
    const target = 301;

    // Potential total points after this throw (not yet applied to player)
    const current = this.currentPlayerService._currentPlayer.value;
    const potentialTotal = current.remainingPoints + this.currentPlayerService._accumulatedPoints;

    // Equalization rule: if potential total equals any other player's current total, reset that other to 0
    this.playerService._players
      .filter(p => p.id !== current.id)
      .forEach(p => {
        if (p.remainingPoints === potentialTotal) {
          p.remainingPoints = 0;
        }
      });

    // Check immediate win at target or overshoot
    if (potentialTotal == target) {
      this.currentPlayerService.finalizeTurn('add');
      this.handleVictory();
      return;
    }
    if (potentialTotal > target) {
      this.displayOvershotNotification().afterDismissed().subscribe(() => {
        this.switchPlayer();
      })
      return;
    }

    // End of turn handling
    if (this.currentPlayerService.hasNoThrowsRemaining()) {
      this.currentPlayerService.finalizeTurn('add');
      this.switchPlayer();
    }
  }

  private checksFor501DoubleOut(multiplier: number) {
    if (this.currentPlayerService.hasReachedZeroPoints()) {
      if (this.currentPlayerService.isDoubleOut(multiplier)) {
        this.currentPlayerService.finalizeTurn('subtract');
        this.handleVictory();
      } else {
        this.displayDoubleOutFailNotification().afterDismissed().subscribe(() => {
          this.switchPlayer();
        })
      }
    } else if (this.currentPlayerService.hasNoThrowsRemaining()) {
      this.currentPlayerService.finalizeTurn('subtract');
      this.switchPlayer();
    }
  }

  private switchPlayer() {
    const newRound = this.isNewRound()
    this.currentPlayerService.switchPlayer(
      this.playerService.getNextPlayer(this.currentPlayerService._currentPlayer.value),
      newRound);
    this.setCurrentPlayerAsFristofList();
  }


  private displayDoubleOutFailNotification() {
    const playerName = this.currentPlayerService._currentPlayer.value.name;
    return this.snackbar.open(`Sorry ${playerName}, you haven't end with double. Switching players.`, 'OK', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

  private displayOvershotNotification() {
    const playerName = this.currentPlayerService._currentPlayer.value.name;
    return this.snackbar.open(`Sorry ${playerName}, you have overshot. Switching players.`, 'OK', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

  private handleVictoryByReachingRoundLimit() {
    const winners = this.currentPlayerService.getPlayersWithHighestPoints();
    const winner = this.playerService._players.find(p => p.name === winners[0]);
    if (winner) {
      this.currentPlayerService._currentPlayer.next(winner);
    }

    this.dialog.open(VictoryDialog, {data: {victoryByReachingRoundLimit: true}, disableClose: true});
  }

  private handleVictory() {
    this._hideAll = true;
    this.dialog.open(VictoryDialog, {disableClose: true});
  }

  isNewRound() {
    const players = this.playerService._players;
    if (players.length === 0) return false;
    return this.currentPlayerService._currentPlayer.value.id === this.lastPlayerId;
  }

  setCurrentPlayerAsFristofList() {
    const current = this.playerService._players.shift();
    this.playerService._players.push(current!);
  }

}
