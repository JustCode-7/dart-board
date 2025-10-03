import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleFullscreenService {
  private wakeLock: WakeLockSentinel | null = null;


  toggleTabFullScreenModeGame() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.initDisplayAlwaysOnMode().then(() => {
          console.log('full screen and display always on mode requested');
        })
      })
        .catch(reason => {
          console.warn("Fullscreen error: ", reason)
        });
    }
  }

  toggleTabFullScreenModeMenue() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.initDisplayAlwaysOnMode().then(() => {
          console.log('full screen and display always on mode requested');
        })
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  releaseDisplayAlwaysOnMode() {
    this.wakeLock!.release().then(() => {
      this.wakeLock = null;
    });
  }


  async initDisplayAlwaysOnMode() {
    try {
      this.wakeLock = await navigator.wakeLock.request("screen");
    } catch (err) {
      // the wake lock request fails - usually system related, such being low on battery
      // @ts-ignore
      console.log(`${err.name}, ${err.message}`);
    }
  }
}
