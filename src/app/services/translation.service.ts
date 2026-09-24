import {inject, Injectable} from '@angular/core';

// Angenommen, die Sprachdaten werden hier importiert oder sind global verfügbar
// Für dieses Beispiel simulieren wir das Laden der Daten:
import languageData from '../../assets/i18n/language.json';
import {CurrentPlayerService} from "./current-player.service";
import {GameType} from "../models/enum/GameType";


export interface TranslationData {
  dialogTitles: {
    allPlayersTitle: string;
    infoDialogTitle: string;
    okButtonText: string;
  };
  instructions: {
    generalInstruction: string;
  };
  cricketInfo: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    bullText: string;
    bullseyeText: string;
  };
  dartInfo: {
    titlePrefix: string;
    elimination301: string;
    highscore: string;
    randomhit: string;
    simple501_doubleout501: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {

  private readonly currentPlayerService: CurrentPlayerService = inject(CurrentPlayerService);
  private currentLanguage = 'de';

  /**
   * Setzt die aktuelle Sprache.
   * @param languageCode Der Sprachcode ('de' oder 'en').
   */
  setLanguage(languageCode: string): void {
    this.currentLanguage = languageCode;
  }

  /**
   * Holt die aktuelle Sprache.
   */
  getLanguage(): string {
    return this.currentLanguage;
  }

  /**
   * Holt den übersetzten Text für einen gegebenen Pfad/Schlüssel.
   * Unterstützt geschachtelte Schlüssel wie 'dialogTitles.okButtonText'.
   * @param path Der Pfad zum Schlüssel (z.B. 'dartInfo.highscore').
   * @returns Der übersetzte String oder ein Fallback.
   */
  translate(path: string): string {
    const language = this.currentLanguage;
    let data = (languageData as any)[language];

    if (!data) {
      console.warn(`Sprachcode ${language} nicht gefunden. Fallback auf Englisch.`);
      data = (languageData as any)['en'];
    }

    const value = this.resolvePath(data, path);

    if (value && typeof value === 'string') {
      return value;
    }

    // Fallback auf Englisch, wenn in der aktuellen Sprache nicht gefunden
    if (language !== 'en') {
      const enData = (languageData as any)['en'];
      const enValue = this.resolvePath(enData, path);
      if (enValue && typeof enValue === 'string') {
        return enValue;
      }
    }

    console.warn(`Keine Übersetzung für Pfad "${path}" gefunden.`);
    return `[${path}]`;
  }

  /**
   * Spezielle Methode für Game-Mode Informationen.
   */
  getGameModeInfo(): string {
    const gameModeKey = this.currentPlayerService.currentGameMode;

    switch (gameModeKey) {
      case GameType.Elimination301:
        return this.translate('dartInfo.elimination301');
      case GameType.Highscore:
        return this.translate('dartInfo.highscore');
      case GameType.RandomHit:
        return this.translate('dartInfo.randomhit');
      case GameType.Simple501:
      case GameType.DoubleOut501:
        return this.translate('dartInfo.simple501_doubleout501');
      case GameType.Cricket:
        return this.translate('cricketInfo.title'); // Oder eine kombinierte Info
      default:
        return this.translate('instructions.generalInstruction');
    }
  }

  /**
   * Hilfsmethode zum Auflösen von geschachtelten Pfaden in Objekten.
   */
  private resolvePath(obj: any, path: string): any {
    return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
  }
}
