import {Component, OnInit} from '@angular/core';
import {DartCounterService} from 'src/app/services/dart-counter.service';
import {Player} from 'src/app/services/player.model';
import {Subject} from "rxjs";

@Component({
  selector: 'app-scoreboard-overview',
  template: `
    <p>scoreboard-overview works!</p>
    <!-- alle Spieler mit Namen und Punkten anzeigen -->
    <div>
      <p *ngFor='let player of playerArr$$ | async'>
        {{player.playerName}} {{player.points}}</p>
    </div>
    <p>end of scoreboard</p>
  `,
  styles: []
})
export class ScoreboardOverviewComponent {
  public playerArr$$: Subject<Player[]>;

  constructor(private dartCounterService: DartCounterService) {
    this.playerArr$$ = this.dartCounterService.playerArr$$

  }
}
