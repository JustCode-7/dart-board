import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {CurrentPlayerService} from "../../services/current-player.service";
import {PlayerService} from "../../services/player.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CricketService} from "../../services/cricket.service";
import {Player} from "../../models/player/player.model";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {
  MiniPlayerOverview
} from "../../modules/current-player-progress/progress/mini-player-overview/mini-player-overview";
import {GameType} from "../../models/enum/GameType";
import {wellFormedArray} from "../../shared/utils/util";

@Component({
  selector: 'app-switch-player-snack',
  templateUrl: './switch-player-snack.component.html',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatProgressBarModule, MiniPlayerOverview],
  standalone: true,
  styles: [`
    .player-name {
      min-width: 50%;
      max-width: 75%;
      display: inline-block;
    }
  `]
})
export class SwitchPlayerSnackComponent implements OnInit, OnDestroy {
  protected readonly wellFormedArray = wellFormedArray;
  protected readonly GameType = GameType;
  protected playerService: PlayerService = inject(PlayerService)
  snackBarRef = inject(MatSnackBar);
  currentPlayerService = inject(CurrentPlayerService);
  cricketService = inject(CricketService);

  public timeLeft: number = 2300;
  private readonly INTERVAL = 100;
  public progress = signal(100);
  public nextPlayer!: Player;
  public cricketKeys: number[] = [];


  ngOnInit(): void {
    this.nextPlayer = this.currentPlayerService._currentPlayer.value;
    this.startTimer();
    // Convert Map iterator to a stable array to avoid ExpressionChangedAfterItHasBeenCheckedError
    this.cricketKeys = Array.from(this.nextPlayer.cricketMap.keys());
    this.getAllButtonsToDisable(true)
  }

  ngOnDestroy(): void {
    this.getAllButtonsToDisable(false)
  }


  startTimer() {
    const totalTime = this.timeLeft;
    const intervalId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= this.INTERVAL;
        this.progress.set(Math.floor((this.timeLeft / totalTime) * 100));
      } else {
        clearInterval(intervalId);
        this.snackBarRef.dismiss();
      }
    }, this.INTERVAL);
  }

  private getAllButtonsToDisable(disabled: boolean) {
    // @ts-ignore
    for (const btn of document.getElementsByTagName("button")) {
      if (btn.innerText !== 'OK' && btn.innerText !== 'REVERT') {
        btn.disabled = disabled;
      }
    }
  }


}
