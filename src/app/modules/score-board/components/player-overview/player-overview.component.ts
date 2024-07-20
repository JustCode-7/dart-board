import { Component } from '@angular/core';
import { PlayerService } from "../../../../services/player.service";
import { HiddenPlayersDialog } from 'src/app/dialogTemplates/hidden-players-dialog/hidden-players-dialog.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';


@Component({
  selector: 'app-scoreboard-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent {

  constructor(public playerService: PlayerService, private dialog: MatDialog
  ) {
  }

  showAllPlayers() {
    this.dialog.open(HiddenPlayersDialog)
  }
}
