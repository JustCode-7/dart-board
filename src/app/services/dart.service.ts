import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {VictoryDialog, VictoryDialogData} from "../dialogTemplates/victory-dialog/victory-dialog.component";
import {GameType} from '../models/enum/GameType';
import {Player, Throw} from '../models/player/player.model';
import {CurrentPlayerService} from "./current-player.service";
import {PlayerService} from "./player.service";
import {RoundCountService} from "./round-count.service";

@Injectable({
  providedIn: 'root'
})
export class DartService {
  private _gameType: GameType = GameType.Simple501;
  private playerNames: string[] = [];
  public _hideAll: boolean = false;

  static createPlayer(name: string, id: number): Player {
    return {id, name, remainingPoints: 501, lastScore: 0, history: [], cricketMap: new Map(), average: 0};
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
  }

  initPlayers(playerNames: string[]) {
    this.roundCountService.reset();
    this.playerNames = playerNames;
    this.playerService.setupDartPlayers(playerNames);
    this._hideAll = false;
    this.currentPlayerService.init(this.playerService.getFirstPlayer());
  }

  score(_throw: Throw) {
    const points = _throw.value * _throw.multiplier;

    if (this.roundCountService.getRemainingRounds() == 0) {
      this.displayRoundCountNotification();
    } else if (this.currentPlayerService.isOvershot(points)) {
      this.displayOvershotNotification();
      this.switchPlayer();
    } else {
      this.currentPlayerService.scoreDart(points);
      if (GameType.DoubleOut501 == this._gameType) {
        this.checksFor501DoubleOut(_throw.multiplier);
      } else {
        this.checksFor501();
      }
    }
  }

  private checksFor501() {
    if (this.currentPlayerService.hasReachedZeroPoints()) {
      this.currentPlayerService.applyDartPoints();
      this.handleVictory();
    } else {
      if (this.currentPlayerService.hasNoThrowsRemaining()) {
        this.currentPlayerService.applyDartPoints();
        this.switchPlayer();
      }
    }
  }

  private checksFor501DoubleOut(multiplier: number) {
    if (this.currentPlayerService.hasReachedZeroPoints()) {
      if (this.currentPlayerService.isDoubleOut(multiplier)) {
        this.currentPlayerService.applyDartPoints();
        this.handleVictory();
      } else {
        this.displayDoubleOutFailNotification();
        this.switchPlayer();
      }
    } else {
      if (this.currentPlayerService.hasNoThrowsRemaining()) {
        this.currentPlayerService.applyDartPoints();
        this.switchPlayer();
      }
    }
  }

  private switchPlayer() {
    this.inkrementRoundCount();
    this.setCurrentPlayerAsFristofList();
    this.currentPlayerService.switchPlayer(this.playerService.getNextPlayer(this.currentPlayerService._currentPlayer));
  }

  private displayDoubleOutFailNotification() {
    const playerName = this.currentPlayerService._currentPlayer.name;
    this.snackbar.open(`Sorry ${playerName}, you haven't end with double. Switching players.`, 'OK', {duration: 5000})
  }

  private displayOvershotNotification() {
    const playerName = this.currentPlayerService._currentPlayer.name;
    this.snackbar.open(`Sorry ${playerName}, you have overshot. Switching players.`, 'OK', {duration: 5000})
  }

  private displayRoundCountNotification() {
    this._hideAll = true;
    this.handleVictoryByReachingRoundLimit();
  }

  private handleVictoryByReachingRoundLimit() {
    const arrOfPoints = this.playerService._players.flatMap(x => x.remainingPoints);
    const winner = this.playerService._players.filter((p1) => p1.remainingPoints == Math.min(...arrOfPoints));
    this.currentPlayerService._currentPlayer = winner[0]; // TODO consider a draw

    const data: VictoryDialogData = {victoryByReachingRoundLimit: true}
    this.dialog.open(VictoryDialog, {data});
    // TODO: Open PointsOverview as Option
  }

  private handleVictory() {
    this._hideAll = true;
    this.dialog.open(VictoryDialog);
    // TODO: Open PointsOverview as Option
  }

  inkrementRoundCount() {
    if (this.currentPlayerService._currentPlayer.name == this.playerNames[this.playerNames.length - 1]) {
      this.roundCountService.incrementRoundCount();
    }
  }

  setCurrentPlayerAsFristofList() {
    const current = this.playerService._players.shift();
    this.playerService._players.push(current!);
  }
}
