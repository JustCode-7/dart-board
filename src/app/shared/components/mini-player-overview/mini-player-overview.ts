import {Component, computed, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PlayerService} from "../../../services/player.service";
import {CurrentPlayerService} from "../../../services/current-player.service";
import {GameType} from "../../../models/enum/GameType";

@Component({
  selector: 'app-mini-player-overview',
  standalone: true,
  imports: [CommonModule
  ],
  templateUrl: './mini-player-overview.html',
  styleUrls: ['./mini-player-overview.scss'],
})
export class MiniPlayerOverview {

  playerService: PlayerService = inject(PlayerService)
  currentPlayerService: CurrentPlayerService = inject(CurrentPlayerService)

  protected readonly GameType = GameType;

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
