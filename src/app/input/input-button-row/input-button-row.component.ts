import {Component} from '@angular/core';
import {DartCounterService} from 'src/app/services/dart-counter.service';

@Component({
  selector: 'app-input-button-row',
  templateUrl: './input-button-row.component.html',
  styleUrls: ['./input-button-row.component.scss'],
})
export class InputButtonRowComponent {

  arrayOf10 = Array(10);

  constructor(private dartCounterService: DartCounterService) {
  }

  public reduceSingle(points: number) {
    this.dartCounterService.reduceCountBy(points);
  }

  public reduceDouble(points: number) {
    this.dartCounterService.reduceCountBy(points * 2);
  }

  public reduceTriple(points: number) {
    this.dartCounterService.reduceCountBy(points * 3);
  }

  public reduceBull(points: number) {
    this.dartCounterService.reduceCountBy(points);
  }

  public reduceBullsEye(points: number) {
    this.dartCounterService.reduceCountBy(points);
  }

  public reduceDartCounter() {
    this.dartCounterService.reduceDartCount();
  }

}
