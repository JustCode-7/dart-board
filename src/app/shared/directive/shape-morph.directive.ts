import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appShapeMorph]',
  standalone: true
})
export class ShapeMorphDirective {
  rippleColor: string = "orange"; // Default Ripple Farbe
  private originalBackgroundColor: string
  private originalBorder: string;


  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    // Speichere die ursprüngliche Hintergrundfarbe
    this.originalBackgroundColor = window.getComputedStyle(this.el.nativeElement).backgroundColor;
    this.originalBorder = window.getComputedStyle(this.el.nativeElement).borderRadius;

    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.5s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.originalBorder);
  }

  @HostListener('click')
  onClick() {
    // Zuerst zum Quadrat ändern
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '20%');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.rippleColor);

    console.log(this.el.nativeElement['border-radius'])

    // Nach 1s wieder zum Kreis zurück
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.originalBorder);
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.originalBackgroundColor);
    }, 1000);
  }

}
