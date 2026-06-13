import {Injectable, OnDestroy, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameTimerService implements OnDestroy {
  private startTime: number = 0;
  private timerInterval: any;

  public elapsedTimeSignal = signal<string>('00:00:00');

  constructor() {
    this.startTimer();
  }

  startTimer() {
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      const now = Date.now();
      const diff = now - this.startTime;
      this.elapsedTimeSignal.set(this.formatTime(diff));
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  resetTimer() {
    this.stopTimer();
    this.startTimer();
  }

  private formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map(v => v < 10 ? '0' + v : v)
      .join(':');
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
