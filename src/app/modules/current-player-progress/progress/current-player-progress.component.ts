import {Component, computed, inject, OnDestroy, OnInit} from '@angular/core';
import {CurrentPlayerService} from "../../../services/current-player.service";
import {RoundCountService} from "../../../services/round-count.service";
import {PlayerService} from "../../../services/player.service";
import {GameType} from "../../../models/enum/GameType";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {GameTimerService} from "../../../services/game-timer.service";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

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
  animations: [
    trigger('throwAdded', [
      transition(':increment', [
        animate('2000ms ease-in-out', keyframes([
          style({transform: 'scale(1)', offset: 0}),
          style({transform: 'scale(1.75)', offset: 0.5}),
          style({transform: 'scale(1)', offset: 1.0}),
        ]))
      ])
    ])
  ]
})
export class CurrentPlayerProgressComponent implements OnInit, OnDestroy {

  public playerService = inject(PlayerService);
  protected readonly GameType = GameType;
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

  getDiffToCurrentPlayer(player: any): number {
    const currentPoints = this.currentPlayerService._remainingPointsToDisplay();
    return Math.abs(currentPoints - player.remainingPoints);
  }

  getCricketValues(): number[] {
    return [15, 16, 17, 18, 19, 20, 25];
  }

  getCricketHitCount(player: any, value: number): number {
    return computed(() => {
      this.currentPlayerService.last3HisSignal();
      return player.cricketMap.get(value) || 0;
    })();
  }
}
