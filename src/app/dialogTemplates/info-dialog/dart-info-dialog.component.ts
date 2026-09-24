import {Component, inject} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {GameType} from "../../models/enum/GameType";
import {CurrentPlayerService} from "../../services/current-player.service";
import {TranslationService} from "../../services/translation.service";


@Component({
  selector: 'app-dart-info-dialog',
  template: `
    <h1
      mat-dialog-title>{{ translationService.translate('dartInfo.titlePrefix') }} {{ currentplayerService.currentGameMode }}</h1>
    <mat-dialog-content>
      <p>{{ translationService.getGameModeInfo() }}</p>
    </mat-dialog-content>
    <mat-dialog-actions class="justify-content-end">
      <button mat-button (click)="toggleLanguage()">
        {{ translationService.getLanguage() === 'de' ? 'EN' : 'DE' }}
      </button>
      <button mat-raised-button color="accent"
              mat-dialog-close="">{{ translationService.translate('dialogTitles.okButtonText') }}
      </button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatDialogModule,

  ],
  styles: []
})
export class DartInfoDialogComponent {
  protected readonly GameType = GameType;
  protected currentplayerService = inject(CurrentPlayerService)
  protected translationService = inject(TranslationService)

  toggleLanguage() {
    const nextLang = this.translationService.getLanguage() === 'de' ? 'en' : 'de';
    this.translationService.setLanguage(nextLang);
  }
}
