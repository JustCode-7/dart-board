import {inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {SoundToggleService} from '../../services/sound-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class ExplosionAnimationService {
  private renderer: Renderer2;
  private explosionElement: HTMLElement | null = null;
  private trajectoryContainer: HTMLElement | null = null;
  tripleTwentyCounter: number = 0;
  tripleCounter: number = 0;
  missCounter: number = 0;
  private readonly soundToggle = inject(SoundToggleService);

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Zeigt eine Explosionsanimation wie eine Silvesterrakete in der Mitte des Bildschirms an
   * @param text Der Text oder die Zahl, die in der Mitte der Explosion angezeigt werden soll
   * @param color Die Farbe der Explosion (default, red, green, blue)
   * @param audioSrc der Sound der abgespielt werden soll
   */
  showExplosion(text: string, color: 'default' | 'red' | 'green' | 'blue' = 'red', audioSrc: string): void {
    const duration: number = 1500;
    // Entferne vorherige Explosion, falls vorhanden
    this.removeExplosion();

    // Container erstellen
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'explosion-container');

    // Explosion-Element erstellen
    const explosion = this.renderer.createElement('div');
    this.renderer.addClass(explosion, 'explosion');

    // Farbklasse hinzufügen, wenn nicht default
    if (color !== 'default') {
      this.renderer.addClass(explosion, `explosion-${color}`);
    }

    // Text-Element erstellen
    const textElement = this.renderer.createElement('div');
    this.renderer.addClass(textElement, 'explosion-text');
    this.renderer.setProperty(textElement, 'textContent', text);

    // Hauptpartikel für die Explosion erstellen
    for (let i = 0; i < 40; i++) {
      const particle = this.renderer.createElement('div');
      this.renderer.addClass(particle, 'explosion-particle');
      this.renderer.appendChild(explosion, particle);
    }

    // Trails für den Raketeneffekt erstellen
    for (let i = 0; i < 20; i++) {
      const trail = this.renderer.createElement('div');
      this.renderer.addClass(trail, 'explosion-trail');
      this.renderer.appendChild(explosion, trail);
    }

    // Elemente zusammenfügen
    this.renderer.appendChild(explosion, textElement);
    this.renderer.appendChild(container, explosion);
    this.renderer.appendChild(document.body, container);

    // Soundeffekt abspielen (optional)
    this.playAnimationSound(audioSrc);

    // Referenz speichern
    this.explosionElement = container;

    // Nach der angegebenen Zeit entfernen
    setTimeout(() => {
      this.removeExplosion();
    }, duration);
  }

  /**
   * Zeigt eine Partikelanimation von einem Startelement zu einem Zielelement in einem ballistischen Bogen
   */
  showTrajectory(source: HTMLElement, target: HTMLElement): void {
    const duration = 1000;
    const sourceRect = source.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const startX = sourceRect.left + sourceRect.width / 2;
    const startY = sourceRect.top + sourceRect.height / 2;
    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;

    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'trajectory-container');
    this.renderer.appendChild(document.body, container);

    const particleCount = 5;
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        this.createMovingParticle(container, startX, startY, endX, endY, duration);
      }, i * 100);
    }

    setTimeout(() => {
      if (document.body.contains(container)) {
        this.renderer.removeChild(document.body, container);
      }
    }, duration + particleCount * 100 + 500);
  }

  private createMovingParticle(container: HTMLElement, startX: number, startY: number, endX: number, endY: number, duration: number) {
    const particle = this.renderer.createElement('div');
    this.renderer.addClass(particle, 'trajectory-particle');

    // Mittelpunkt für den Bogen berechnen
    const midX = (startX + endX) / 2;
    const midY = Math.min(startY, endY) - 150; // Bogen nach oben

    this.renderer.setStyle(particle, '--start-x', `${startX}px`);
    this.renderer.setStyle(particle, '--start-y', `${startY}px`);
    this.renderer.setStyle(particle, '--end-x', `${endX}px`);
    this.renderer.setStyle(particle, '--end-y', `${endY}px`);

    this.renderer.appendChild(container, particle);

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Quadratischer Bezier-Bogen
      const x = (1 - progress) * (1 - progress) * startX + 2 * (1 - progress) * progress * midX + progress * progress * endX;
      const y = (1 - progress) * (1 - progress) * startY + 2 * (1 - progress) * progress * midY + progress * progress * endY;

      this.renderer.setStyle(particle, 'transform', `translate(${x}px, ${y}px)`);
      this.renderer.setStyle(particle, 'opacity', progress < 0.1 ? progress * 10 : (1 - progress) * 2);

      // Schweif-Partikel
      if (Math.random() > 0.5) {
        this.createTrailParticle(container, x, y);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (container.contains(particle)) {
          this.renderer.removeChild(container, particle);
        }
      }
    };

    requestAnimationFrame(animate);
  }

  private createTrailParticle(container: HTMLElement, x: number, y: number) {
    const trail = this.renderer.createElement('div');
    this.renderer.addClass(trail, 'trajectory-trail');
    this.renderer.setStyle(trail, 'left', `${x}px`);
    this.renderer.setStyle(trail, 'top', `${y}px`);
    this.renderer.setStyle(trail, 'animation', 'trailFade 0.5s ease-out forwards');

    this.renderer.appendChild(container, trail);

    setTimeout(() => {
      if (container.contains(trail)) {
        this.renderer.removeChild(container, trail);
      }
    }, 500);
  }

  private removeExplosion(): void {
    if (this.explosionElement && document.body.contains(this.explosionElement)) {
      this.renderer.removeChild(document.body, this.explosionElement);
      this.explosionElement = null;
    }
  }

  public playAnimationSound(soundSrc: string): void {
    try {
      const isOn = this.soundToggle.isSoundOn.getValue();
      if (!isOn) return;

      const audio = new Audio();
      audio.src = soundSrc;
      audio.volume = 0.5;
      audio.play().catch(err => {
        console.log('Audio konnte nicht abgespielt werden:', err);
      });
    } catch (error) {
      console.log('Fehler beim Abspielen des Sounds:', error);
    }
  }
}
