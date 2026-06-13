import {Directive, ElementRef, EventEmitter, HostListener, inject, Output, Renderer2} from '@angular/core';
import {CurrentPlayerService} from "../../services/current-player.service";

@Directive({
  selector: '[appShapeMorph]',
  standalone: true
})
export class ShapeMorphDirective {
  private morphTimer: any = null;
  private originalTransform: string = '';

  @Output() shapeMorphClick = new EventEmitter<void>();

  private readonly currentPlayerService = inject(CurrentPlayerService);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
  }

  /**
   * Führt bei einem Klick eine kurze Geräte-Vibration aus (sofern vom Browser/Endgerät unterstützt).
   */
  vibrateOnClick(vibrateDuration: number): void {
    if ('vibrate' in navigator) {
      navigator.vibrate(vibrateDuration);
    }
  }

  private playPressAnimation() {
    if (this.morphTimer) {
      clearTimeout(this.morphTimer);
      this.renderer.setStyle(this.el.nativeElement, 'transform', this.originalTransform);
    }

    this.originalTransform = this.el.nativeElement.style.transform || '';
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(2px, 2px) scale(0.98)');

    this.morphTimer = setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'transform', this.originalTransform);
      this.morphTimer = null;
    }, 150);
  }

  @HostListener('contextmenu', ['$event'])
  onGlobalContextMenu(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('click', ['$event'])
  onClick(ev: MouseEvent) {
    // Wenn es ein manueller Klick ist, verhindern wir das Standardverhalten
    // und managen die Logik selbst.
    if (ev.isTrusted) {
      ev.preventDefault();
      ev.stopImmediatePropagation();
    }

    this.vibrateOnClick(50);
    this.playPressAnimation();

    // Wir setzen den Button im Service für die KI/History-Logik (falls benötigt)
    this.currentPlayerService.setLastClickedButton(this.el.nativeElement);
    this.shapeMorphClick.emit();
  }
}
