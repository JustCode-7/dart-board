import {Injectable} from '@angular/core';

export const ROUND_LIMIT = 45

@Injectable({
  providedIn: 'root'
})
export class RoundCountService {

  private readonly INITIAL_ROUND_COUNT = 2;
  public MAX_ROUND_COUNT = ROUND_LIMIT;

  roundCount: number = this.INITIAL_ROUND_COUNT;

  setMaxRounds(max?: number) {
    if (max) {
      this.MAX_ROUND_COUNT = max;
    } else {
      this.MAX_ROUND_COUNT = ROUND_LIMIT
    }

  }

  getRemainingRounds(): number {
    const decrementedRoundCount = this.MAX_ROUND_COUNT - this.roundCount;
    return decrementedRoundCount < 0 ? 0 : decrementedRoundCount;
  }

  incrementRoundCount() {
    this.roundCount++;
  }

  reset() {
    this.roundCount = this.INITIAL_ROUND_COUNT;
  }

  decrementRoundCount() {
    if (this.roundCount > 1) {
      this.roundCount--;
    }

  }
}
