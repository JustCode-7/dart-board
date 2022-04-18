import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-hidden-players-dialog',
  template: `
    <h1 mat-dialog-title>All Players</h1>
    <div mat-dialog-content *ngFor="let player of playerService._players ;let i=index">
     {{player.name}} : {{player.remainingPoints}}
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>OK</button>
    </div>
  `,
  styles: []
})
export class HiddenPlayersDialog {

  constructor(public playerService: PlayerService
  ) {
  }
}


