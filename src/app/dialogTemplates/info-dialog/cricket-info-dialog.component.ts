import {Component, inject} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {TranslationService} from "../../services/translation.service";


@Component({
  selector: 'app-cricket-info-dialog',
  template: `
    <h1 mat-dialog-title>{{ translationService.translate('cricketInfo.title') }}</h1>
    <mat-dialog-content>
      <p>{{ translationService.translate('cricketInfo.p1') }}</p>
      <p>{{ translationService.translate('cricketInfo.p2') }}</p>
      <p>{{ translationService.translate('cricketInfo.p3') }}</p>
      <p>{{ translationService.translate('cricketInfo.p4') }}</p>
      <span class="mt-2 material-symbols-outlined">trip_origin</span>
      <span>{{ translationService.translate('cricketInfo.bullText') }}</span> <br>
      <span class="mt-2 material-symbols-outlined">target</span>
      <span>{{ translationService.translate('cricketInfo.bullseyeText') }}</span>
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
export class CricketWinInstructionsDialog {
  protected translationService = inject(TranslationService)

  toggleLanguage() {
    const nextLang = this.translationService.getLanguage() === 'de' ? 'en' : 'de';
    this.translationService.setLanguage(nextLang);
  }
}
