import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CricketService} from "../../../services/cricket.service";
import {ToggleFullscreenService} from "../../../services/toggle-fullscreen.service";
import {CurrentPlayerService} from "../../../services/current-player.service";
import {AIService} from "../../../services/ai.service";
import {GameType} from "../../../models/enum/GameType";
import {CommonModule} from "@angular/common";
import {CurrentPlayerProgressComponent} from "../../current-player-progress/progress/current-player-progress.component";
import {
  InputButtonRowCricketComponent
} from "../components/input-button-row-cricket/input-button-row-cricket.component";
import {MultiplierToggleComponent} from "../../../shared/components/multiplier-toggle/multiplier-toggle.component";
import {MissBtn} from "../../../shared/components/bottom-line/miss-btn.component";
import {Throw} from "../../../models/game/game.model";
import {PlayerService} from "../../../services/player.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cricket-component',
  templateUrl: './cricket-board.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CurrentPlayerProgressComponent,
    InputButtonRowCricketComponent,
    MultiplierToggleComponent,
    MissBtn,
  ],
})
export class CricketBoardComponent implements OnDestroy, OnInit {
  cricketService = inject(CricketService);
  protected playerService = inject(PlayerService);
  protected currentPlayerService = inject(CurrentPlayerService);
  private aiService = inject(AIService);
  protected readonly fullscreenService = inject(ToggleFullscreenService);
  private aiSubscription?: Subscription;
  private aiTimeout: any;

  ngOnInit(): void {
    this.fullscreenService.toggleTabFullScreenModeGame();
    this.aiSubscription = this.currentPlayerService.aiTurn$.subscribe(() => {
      this.playAITurn();
    });
  }

  private playAITurn() {
    if (this.aiTimeout) {
      clearTimeout(this.aiTimeout);
    }
    this.aiTimeout = setTimeout(() => {
      const player = this.currentPlayerService._currentPlayer.value;
      if (player.isAI && this.currentPlayerService.hasThrowsRemaining() && !this.currentPlayerService.isUIBlocked()) {
        const _throw = this.aiService.getNextThrow(
          player.difficulty!,
          GameType.Cricket,
          player,
          this.playerService._players
        );

        this.performClick(_throw);
      }
    }, 1500);
  }

  private performClick(_throw: Throw) {
    if (this.currentPlayerService.isUIBlocked()) return;

    if (_throw.value === 0) {
      const missBtn = document.getElementById('miss-btn');
      missBtn?.click();
      return;
    }

    // Set multiplier first if needed
    if (_throw.multiplier > 1 && _throw.value !== 25) {
      const multiplierBtn = document.getElementById(`multiplier-${_throw.multiplier}`);
      multiplierBtn?.click();
    }

    // BullsEye in Cricket is represented as value 25 with multiplier 2 in some logic,
    // but the button handles it via value 50 or value 25 with multiplier.
    // In our cricket-board, justScore(25) is Bull, justScore(50) is BullsEye.
    let buttonId = `cricket-btn-${_throw.value}`;
    if (_throw.value === 25 && _throw.multiplier === 2) {
      buttonId = `cricket-btn-50`;
    }

    const btn = document.getElementById(buttonId);
    if (btn) {
      btn.click();
    } else {
      // Fallback if button not found
      this.cricketService.scoreCricketWithMultiplier(_throw);
    }
  }

  ngOnDestroy(): void {
    this.cricketService._gameType = '';
    this.aiSubscription?.unsubscribe();
    if (this.aiTimeout) {
      clearTimeout(this.aiTimeout);
    }
  }
}
