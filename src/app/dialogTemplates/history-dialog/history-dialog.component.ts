import {Component, inject} from '@angular/core';
import {Player} from "../../models/player/player.model";
import {CommonModule} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {wellFormedArray} from "../../shared/utils/util";

export interface HistoryDialogData {
  player: Player;
}

@Component({
  selector: 'app-history-dialog',
  template: `
    <div class="minWith15vw">
      <h1 mat-dialog-title>Match-History - {{ historyData.player.name }}</h1>
      <mat-dialog-content>
        <mat-card class="mb-1">
          <mat-card-title class="row justify-content-between"> <b class="text-bg-warning rounded">{{ historyData.player.remainingPoints }}</b> ⌀ {{ historyData.player.average }}
          </mat-card-title>
          @for (playerhistory of historyData.player.history; track $index) {
              <div class="dart-throw-indicator">
                <button mat-mini-fab class="no-pointer sum-circle">
                  <span>{{ playerhistory.sum }}</span>
                </button>
                <button mat-mini-fab color="warn" class="no-pointer hit-circle">
                  <span>{{ playerhistory.hits[0] ?? '➶' }}</span>
                </button>
                <button mat-mini-fab color="warn" class="no-pointer hit-circle">
                  <span>{{ playerhistory.hits[1] ?? '➶' }}</span>
                </button>
                <button mat-mini-fab color="warn" class="no-pointer hit-circle">
                  <span>{{ playerhistory.hits[2] ?? '➶' }}</span>
                </button>
              </div>
          }
        </mat-card>
      </mat-dialog-content>
      <mat-dialog-actions>
        <button mat-raised-button mat-dialog-close="" color="accent">Close</button>
      </mat-dialog-actions>
    </div>
  `,
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
  ],
  styles: [`
    .minWith15vw { min-width: 30vw; }
    .dart-throw-indicator {
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
  protected readonly wellFormedArray = wellFormedArray;

  sumLast3(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
  }
}
