import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {DartService} from "../../../services/dart.service";
import {ToggleFullscreenService} from "../../../services/toggle-fullscreen.service";
import {CurrentPlayerService} from "../../../services/current-player.service";
import {AIService} from "../../../services/ai.service";
import {GameType} from "../../../models/enum/GameType";
import {CommonModule} from "@angular/common";
import {CurrentPlayerProgressComponent} from "../../current-player-progress/progress/current-player-progress.component";
import {InputButtonRowComponent} from "../components/input-button-row/input-button-row.component";
import {MultiplierToggleComponent} from "../../../shared/components/multiplier-toggle/multiplier-toggle.component";
import {MissBtn} from "../../../shared/components/bottom-line/miss-btn.component";
import {Throw} from "../../../models/game/game.model";
import {PlayerService} from "../../../services/player.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dart-board',
  templateUrl: './dart-board.component.html',
  standalone: true,
  imports: [
    CommonModule,
    CurrentPlayerProgressComponent,
    InputButtonRowComponent,
    MultiplierToggleComponent,
    MissBtn,
  ],
})
export class DartBoardComponent implements OnDestroy, OnInit {

  dartservice = inject(DartService);
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
          this.currentPlayerService.currentGameMode as GameType,
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

    if (_throw.value === 25) {
      const buttonId = _throw.multiplier === 2 ? 'dart-btn-bullseye' : 'dart-btn-bull';
      const btn = document.getElementById(buttonId);
      btn?.click();
      return;
    }

    // Set multiplier first if needed
    if (_throw.multiplier > 1) {
      const multiplierBtn = document.getElementById(`multiplier-${_throw.multiplier}-button`);
      multiplierBtn?.click();
    }

    const btn = document.getElementById(`dart-btn-${_throw.value}`);
    if (btn) {
      btn.click();
    } else {
      // Fallback
      this.dartservice.score(_throw);
    }
  }


  ngOnDestroy(): void {
    this.dartservice._gameType = '';
    this.aiSubscription?.unsubscribe();
    if (this.aiTimeout) {
      clearTimeout(this.aiTimeout);
    }
  }

}
