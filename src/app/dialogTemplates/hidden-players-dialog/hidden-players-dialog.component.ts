import {Component, inject, OnInit} from '@angular/core';
import {PlayerService} from 'src/app/services/player.service';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {GameType} from "../../models/enum/GameType";
import {CurrentPlayerService} from "../../services/current-player.service";
import {MiniPlayerOverview} from "../../shared/components/mini-player-overview/mini-player-overview";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-hidden-players-dialog',
  templateUrl: './hidden-players-dialog.component.html',
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MiniPlayerOverview,
    MatIcon,
  ],
  styles: `

    .cricket-player-overview {
      overflow-x: hidden;
    }

    @media screen and (max-width: 480px) and (orientation: portrait) {
      .dialog-wrapper-width {
        max-width: 50vw;
      }

      .cricket-player-overview {
        app-mini-player-overview {
          display: inline-flex;
          flex: fit-content;
          padding-left: 2px !important;
          margin-left: 2px !important;
          padding-right: 2px !important;
          margin-right: 2px !important;
          transform: scale(0.8) !important;
        }
      }
    }



  `,
  standalone: true
})
export class HiddenPlayersDialog implements OnInit {
  protected readonly GameType = GameType;
  public currentPlayerService = inject(CurrentPlayerService);

  constructor(public dialogRef: MatDialogRef<HiddenPlayersDialog>, public playerService: PlayerService) {
  }

  ngOnInit() {
    this.dialogRef.updateSize('300%', '50%');
  }

  getDiff(player: any): number {
    return Math.abs(this.currentPlayerService._currentPlayer.value.remainingPoints - player.remainingPoints);
  }
}


