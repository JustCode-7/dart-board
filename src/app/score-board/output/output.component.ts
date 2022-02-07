import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {DartCounterService} from 'src/app/services/dart-counter.service';

@Component({
  selector: 'app-output',
  template: `
    <div class="playerDiv">
      <p> Player: {{playerName$ | async}}</p>
      <p> Current Points: {{points$ | async}} of 501</p>
      <p> Darts: {{dartCount$ | async}} of 3</p>
      <p> Round: {{roundCount$ | async}}</p>
    </div>

    <app-scoreboard-overview></app-scoreboard-overview>
  `,
  styles: [`
    .playerDiv {
      width: 50%;
      background-color: white;
      margin: 0 auto;
    }`]
})
export class OutputComponent implements OnInit {

  public points$: Subject<number>;
  public dartCount$: Subject<number>;
  public playerName$: Subject<string>;
  public roundCount$: Subject<number>;

  constructor(private dartCounterService: DartCounterService) {
    this.points$ = this.dartCounterService.points$;
    this.dartCount$ = this.dartCounterService.dartCount$;
    this.playerName$ = this.dartCounterService.playerName$;
    this.roundCount$ = this.dartCounterService.roundCount$;
  }

  ngOnInit(): void {
    // echt dirty, Tom mal fragen wie das besser geht, wahrscheinlich neue UI Componente ;-)
    const players = window.prompt('Hi lets play darts! Enter number of players:');
    this.initPlayers(players);
  }

  public initPlayers(players: string | null) {

    if (players == null || players === '') {
      this.dartCounterService.initPlayers(1);
    } else {
      this.dartCounterService.initPlayers(+players);
    }
  }

}
