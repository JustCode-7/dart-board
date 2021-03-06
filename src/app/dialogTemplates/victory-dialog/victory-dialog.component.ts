import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CurrentPlayerService} from "../../services/current-player.service";
import {ROUND_LIMIT} from "../../services/round-count.service";

export interface VictoryDialogData {
  victoryByReachingRoundLimit: boolean;
}

@Component({
  selector: 'app-victory-dialog',
  template: `
    <h1 mat-dialog-title>Congratulations, {{ currentPlayerService._currentPlayer.name }}. You have won.</h1>
    <mat-dialog-content>
      <p *ngIf="data?.victoryByReachingRoundLimit">You have reached the limit of {{roundLimit}} rounds.</p>
      <p>Do you want to play again?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close="" routerLink="/">Yes, let's play darts!</button>
      <button mat-button mat-dialog-close="">No, stay here and look around.</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class VictoryDialog {

  roundLimit = ROUND_LIMIT

  constructor(public currentPlayerService: CurrentPlayerService,
              @Inject(MAT_DIALOG_DATA) public data: VictoryDialogData,
  ) {
  }
}
