import {Component, inject} from '@angular/core';
import {Player} from "../../models/player/player.model";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {HiddenPlayersDialog} from "../hidden-players-dialog/hidden-players-dialog.component";

export interface HistoryDialogData {
  player: Player;
}

@Component({
  selector: 'app-history-dialog',
  templateUrl: './history-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
  styles: [`
    .mat-card-width {
      width: fit-content;
      min-width: 90%;
    }

    .history-dialog-container {
      display: flex;
      flex-direction: column;
    }

    .dart-throw-indicator {
      font-family: monospace;
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
      justify-content: center;
      margin: 4px 0;

      .sum-circle {
        background-color: #4caf50 !important;
        color: #fff !important;
        transform: scale(0.95);
        font-weight: bold;
      }

      .hit-circle {
        background-color: #f44336 !important;
        color: #fff !important;
        transform: scale(0.75);
        margin: 0;
      }
    }
  `]
})
export class HistoryDialog {

  public historyData: HistoryDialogData = inject(MAT_DIALOG_DATA)

  constructor(public dialogRef: MatDialogRef<HiddenPlayersDialog>) {
    this.dialogRef.updateSize('300%', '50%');
  }
}
