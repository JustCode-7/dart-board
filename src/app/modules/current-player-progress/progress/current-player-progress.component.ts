import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CurrentPlayerService} from "../../../services/current-player.service";
import {RoundCountService} from "../../../services/round-count.service";
import {PlayerService} from "../../../services/player.service";
import {GameType} from "../../../models/enum/GameType";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {GameTimerService} from "../../../services/game-timer.service";
import {formatTarget} from "../../../shared/utils/util";

@Component({
  selector: 'app-current-player-progress',
  templateUrl: './current-player-progress.component.html',
  styleUrls: ['./current-player-progress.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CurrentPlayerProgressComponent implements OnInit, OnDestroy {

  public playerService = inject(PlayerService);
  protected readonly GameType = GameType;
  protected readonly formatTarget = formatTarget;
  public currentPlayerService: CurrentPlayerService = inject(CurrentPlayerService);
  public roundCountService: RoundCountService = inject(RoundCountService);
  public gameTimerService: GameTimerService = inject(GameTimerService);


  ngOnInit(): void {
    this.gameTimerService.startTimer();
  }

  ngOnDestroy(): void {
    this.gameTimerService.stopTimer();
  }

  getProgressColor() {
    const remainingThrows = this.currentPlayerService._remainingThrows;
    switch (remainingThrows) {
      case 3:
        return 'primary';
      case 2:
        return 'accent';
      case 1:
        return 'warn';
      default:
        return undefined;
    }
  }

  getRoundCount(): string {
    const actual = this.roundCountService.roundCount <= this.roundCountService.MAX_ROUND_COUNT ? this.roundCountService.roundCount : this.roundCountService.MAX_ROUND_COUNT
    return `${actual} / ${this.roundCountService.MAX_ROUND_COUNT}`;
  }
}
