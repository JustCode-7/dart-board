import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleFullscreenService {
  private wakeLock: WakeLockSentinel | null = null;
  isFullScreen = signal(false)

  constructor() {
    document.addEventListener("fullscreenchange", () => {
      this.updateFullScreenStatus();
    });
    this.updateFullScreenStatus();
  }

  private updateFullScreenStatus() {
    this.isFullScreen.set(!!document.fullscreenElement || this.isInStandaloneMode());
  }

  toggleTabFullScreenModeGame() {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.updateFullScreenStatus();
        this.initDisplayAlwaysOnMode().then(() => {
          console.log('full screen and display always on mode requested');
        })
      })
        .catch(reason => {
          console.warn("Fullscreen error: ", reason)
        });
    } else if (this.isInStandaloneMode()) {
      this.initDisplayAlwaysOnMode();
    } else {
      console.warn("Fullscreen API is not supported on this browser.");
    }
  }

  private isInStandaloneMode(): boolean {
    return (window.matchMedia('(display-mode: standalone)').matches) ||
      (window.navigator as any).standalone ||
      document.referrer.includes('android-app://');
  }

  toggleTabFullScreenModeMenue() {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        this.updateFullScreenStatus();
        this.initDisplayAlwaysOnMode().then(() => {
          console.log('full screen and display always on mode requested');
        })
      });
    } else if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen();
    } else if (this.isInStandaloneMode()) {
      // In PWA mode, we might not be in "real" fullscreen, but we want to ensure WakeLock is active
      this.initDisplayAlwaysOnMode();
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
