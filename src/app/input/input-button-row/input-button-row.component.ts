import {Component} from '@angular/core';
import {DartCounterService} from 'src/app/services/dart-counter.service';
import {range} from 'lodash';

interface DisplayNumber {
  text: string,
  value: number,
}

@Component({
  selector: 'app-input-button-row',
  templateUrl: './input-button-row.component.html',
  styleUrls: ['./input-button-row.component.scss'],
})
export class InputButtonRowComponent {

  singles: DisplayNumber[] = range(1, 21).map(this.mapToDisplayNumber);
  doubles: DisplayNumber[] = this.singles.map(this.prefixDisplayNameBy('D')).map(this.multiplyValueBy(2));
  triples: DisplayNumber[] = this.singles.map(this.prefixDisplayNameBy('T')).map(this.multiplyValueBy(3));
  bull: DisplayNumber = {text: 'Bull', value: 25};
  bullsEye: DisplayNumber = {text: `Bull's Eye`, value: 25};
  miss: DisplayNumber = {text: 'Miss', value: 0};

  constructor(private dartCounterService: DartCounterService) {
  }

  scorePoints(points: number) {
    this.dartCounterService.reduceCountBy(points);
  }

  reduceDartCounter() {
    this.dartCounterService.reduceDartCount();
  }

  // noinspection JSMethodCanBeStatic
  /**
   * Convert a primitive number into a {@link DisplayNumber}
   * @param num
   */
  private mapToDisplayNumber(num: number): DisplayNumber {
    return {text: num + '', value: num}
  }

  /**
   * Curried function to multiply the value of a given {@link DisplayNumber}
   *
   * @param multiplier
   * @returns a transformer function
   */
  private multiplyValueBy(multiplier: number): (input: DisplayNumber) => DisplayNumber {
    return ({text, value}: DisplayNumber) => ({text, value: value * multiplier});
  }

  /**
   * Curried function to add a prefix to the displayName of a given {@link DisplayNumber}
   *
   * @param prefix
   * @returns a transformer function
   */
  private prefixDisplayNameBy(prefix: string): (input: DisplayNumber) => DisplayNumber {
    return ({text, value}: DisplayNumber) => ({text: `${prefix} ${text}`, value});
  }

}
