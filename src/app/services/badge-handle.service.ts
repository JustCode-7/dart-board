import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {InputButton} from "../modules/dart-board/components/input-button-row/input-button-row.component";

@Injectable({
  providedIn: 'root'
})
export class BadgeHandleService {

  private badgeCount = new BehaviorSubject<number>(1);
  private badgeVisibility = new BehaviorSubject<boolean>(true);
  private currentPlayerId: string | number | undefined;

  /**
   * tempBadgeValue wird verwendet, um die Reihenfolge der Würfe innerhalb einer Aufnahme (Turn)
   * auf den Badges anzuzeigen (1, 2 oder 3). Er wird bei jedem Wurf inkrementiert und
   * beim Spielerwechsel oder Undo zurückgesetzt bzw. aus der Historie wiederhergestellt.
   */
  tempBadgeValue: number = 0
  matBadgeHiddenBull: boolean = true;
  matBadgeHiddenBullsEye: boolean = true;
  bullBadgeCount: string | number | undefined | null;
  bullsEyeBadgeCount: string | number | undefined | null;
  matBadgeHiddenMiss: boolean = true;
  missBadgeCount: string | number | undefined | null;
  twentyButtons: InputButton[] = [];

  setPlayerId(id: string | number) {
    this.currentPlayerId = id;
  }

  isCurrentPlayer(id: string | number): boolean {
    return this.currentPlayerId === id;
  }

  resetBadges() {
    this.badgeCount.next(1);
    this.badgeVisibility.next(true);
    this.tempBadgeValue = 0;
    this.matBadgeHiddenBull = true;
    this.matBadgeHiddenBullsEye = true;
    this.matBadgeHiddenMiss = true;
    // Hinweis: Wir setzen bullBadgeCount, bullsEyeBadgeCount, missBadgeCount und badgeValue
    // NICHT auf undefined, um "ExpressionChangedAfterItHasBeenCheckedError" zu vermeiden.
    // Das Ausblenden erfolgt zuverlässig über die Hidden-Flags oben.
    this.twentyButtons.forEach(input => {
      input.badge = true;
    });
  }

  scoreMiss() {
    this.tempBadgeValue++;
    if (this.matBadgeHiddenMiss) {
      this.matBadgeHiddenMiss = false;
      this.missBadgeCount = this.tempBadgeValue;
    }
  }

  restoreBadgesFromHistory(last3History: number[]) {
    this.resetBadges();
    if (!last3History || last3History.length === 0) {
      return;
    }

    last3History.forEach((val, index) => {
      const badgeVal = index + 1;
      const numericVal = Number(val);
      if (numericVal === 25 || numericVal === 50) {
        if (numericVal === 50) {
          this.matBadgeHiddenBullsEye = false;
          this.bullsEyeBadgeCount = badgeVal;
        }
        if (numericVal === 25) {
          this.matBadgeHiddenBull = false;
          this.bullBadgeCount = badgeVal;
        }
      } else if (numericVal === 0) {
        this.matBadgeHiddenMiss = false;
        this.missBadgeCount = badgeVal;
      } else {
        let baseVal = numericVal;
        if (numericVal > 25) {
          if (numericVal % 3 === 0) baseVal = numericVal / 3;
          if (numericVal % 2 === 0) baseVal = numericVal / 2;
        }
        const btn = this.twentyButtons.find(b => b.zahl === baseVal);
        if (btn) {
          btn.badge = false;
          btn.badgeValue = badgeVal;
        }
      }
      this.tempBadgeValue = badgeVal;
    });
  }

  incrementBadgeCount() {
    this.badgeCount.next(this.badgeCount.value + 1);
  }

  getBadgeCount() {
    return this.badgeCount.asObservable();
  }

  getBadgeVisibility() {
    return this.badgeVisibility.asObservable();
  }
}
