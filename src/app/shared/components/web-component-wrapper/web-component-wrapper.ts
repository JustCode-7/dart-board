import {Component, CUSTOM_ELEMENTS_SCHEMA, DOCUMENT, inject, Inject, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-web-component-wrapper',
  imports: [],
  templateUrl: './web-component-wrapper.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebComponentWrapper implements OnInit {
  // 1. Injiziere den Renderer2 und das DOCUMENT-Token
  private renderer: Renderer2 = inject(Renderer2)
  @Inject(DOCUMENT) private document: Document = inject(DOCUMENT)


  ngOnInit(): void {
    const scriptUrl = 'https://justcode-7.github.io/app-info-webcomponent/my-webcomponent.esm.js';
    this.dynamicallyLoadWebcomponent(scriptUrl)
  }

  dynamicallyLoadWebcomponent(scriptUrl: string) {
    // Prüfen, ob das Skript bereits geladen wurde (verhindert doppeltes Laden)
    if (!this.document.querySelector(`script[src="${scriptUrl}"]`)) {

      // 2. Erstelle ein natives <script>-Element
      const script = this.renderer.createElement('script');

      // 3. Konfiguriere es als ESM-Modul
      script.type = 'module';
      script.src = scriptUrl;
      script.async = true; // Lädt asynchron, ohne die Hauptseite zu blockieren

      // 4. Optionale Callbacks zur Überwachung
      script.onload = () => console.log('Vue ESM Web Component erfolgreich geladen.');
      script.onerror = (err: any) => console.error('Fehler beim Laden des Skripts:', err);

      // 5. In den <head> des Browsers einhängen
      this.renderer.appendChild(this.document.head, script);
    }
  }

}
