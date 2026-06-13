import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToggleFullscreenService {
  private wakeLock: WakeLockSentinel | null = null;
  isFullScreen = new BehaviorSubject(false)

  constructor() {
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        this.isFullScreen.next(true)
      } else {
        this.isFullScreen.next(false)
      }
    });
  }

  toggleTabFullScreenModeGame() {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.isFullScreen.next(true)
        this.initDisplayAlwaysOnMode().then(() => {
          console.log('full screen and display always on mode requested');
        })
      })
        .catch(reason => {
          console.warn("Fullscreen error: ", reason)
        });
    } else {
      console.warn("Fullscreen API is not supported on this browser.");
    }
  }

  toggleTabFullScreenModeMenue() {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.isFullScreen.next(true)
        this.initDisplayAlwaysOnMode().then(() => {
          console.log('full screen and display always on mode requested');
        })
      });
    } else if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      console.warn("Fullscreen API is not supported or no element is in fullscreen.");
    }
  }

  releaseDisplayAlwaysOnMode() {
    if (this.wakeLock) {
      this.wakeLock.release().then(() => {
        this.wakeLock = null;
      }).catch(err => {
        console.error(`Error releasing wake lock: ${err.message}`);
      });
    }
  }


  async initDisplayAlwaysOnMode() {
    if (!('wakeLock' in navigator)) {
      console.log('Wake Lock API not supported.');
      return;
    }
    try {
      this.wakeLock = await navigator.wakeLock.request("screen");
    } catch (err) {
      // the wake lock request fails - usually system related, such being low on battery
      // @ts-ignore
      console.log(`${err.name}, ${err.message}`);
    }
  }
}
