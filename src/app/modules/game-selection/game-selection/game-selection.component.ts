import {ChangeDetectorRef, Component, HostListener, inject, OnInit, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from "@angular/router";
import {GameType} from '../../../models/enum/GameType';
import {Difficulty, OverviewPlayer} from "../../../models/player/player.model";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {WebComponentWrapper} from "../../../shared/components/web-component-wrapper/web-component-wrapper";
import {form, FormField, FormRoot} from "@angular/forms/signals";

interface GameSeclectionState {
  gameType: GameType;
  overviewPlayers: OverviewPlayer[];
  maxRounds: number;
}


@Component({
  selector: 'app-game-selection',
  templateUrl: './game-selection.component.html',
  styleUrls: ['./game-selection.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    CdkDropList,
    CdkDrag,
    WebComponentWrapper,
    FormRoot,
    FormsModule,
    FormField,
  ],
})
export class GameSelectionComponent implements OnInit {

  gameType = GameType;
  difficulty = Difficulty;

  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  showScrollTopButton = false;
  showScrollBottomButton = false;
  roundOptions = Array.from({length: 15}, (_, i) => (i + 1) * 3); // 3, 6, 9...45

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollVisibility();
  }

  private checkScrollVisibility() {
    const startButton = document.querySelector('button[type="submit"]');
    if (startButton) {
      const rect = startButton.getBoundingClientRect();
      // Wenn der Start-Button nicht mehr im Viewport ist (oben rausgescrollt)
      this.showScrollTopButton = rect.bottom < 0;
    }

    // Prüfen ob der letzte Spieler sichtbar ist
    const playerRows = document.querySelectorAll('.player-row-width');
    if (playerRows.length > 0) {
      const lastPlayer = playerRows[playerRows.length - 1];
      const rect = lastPlayer.getBoundingClientRect();
      // Wenn der letzte Spieler unterhalb des Viewports liegt
      this.showScrollBottomButton = rect.top > window.innerHeight;
    } else {
      this.showScrollBottomButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  scrollToBottom() {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }

  readonly gameState = signal<GameSeclectionState>({
    gameType: GameType.Simple501,
    overviewPlayers: [
      {name: 'first', isAI: false, difficulty: Difficulty.Medium, wins: 0},
      {name: 'second', isAI: false, difficulty: Difficulty.Medium, wins: 0}
    ],
    maxRounds: 3
  });

  readonly gameForm = form(this.gameState, {
    submission: {
      action: async (formInstance) => {
        this.onSubmit()

      },
      // Verhindert das Absenden, solange interne Validatoren fehlschlagen
      ignoreValidators: 'none',
    }
  });

  private readonly defaultFormState: GameSeclectionState = {
    gameType: GameType.Simple501,
    overviewPlayers: [
      {name: 'first', isAI: false, difficulty: Difficulty.Medium, wins: 0},
      {name: 'second', isAI: false, difficulty: Difficulty.Medium, wins: 0}
    ],
    maxRounds: 3
  }

  ngOnInit(): void {
    if (localStorage.getItem('playerNames')) {
      const savedPlayers = JSON.parse(localStorage.getItem('playerNames')!);
      if (savedPlayers.length > 0 && typeof savedPlayers[0] === 'string') {
        // Migration from old string array to new object array
        this.gameState().overviewPlayers = savedPlayers.map((nameAsSting: string) => {
          return {
            name: nameAsSting,
            isAI: false,
            difficulty: Difficulty.Medium,
            wins: 0
          };
        });
      } else {
        this.gameState().overviewPlayers = savedPlayers
      }
    }
    if (localStorage.getItem('gameType')) {
      const gameType = JSON.parse(localStorage.getItem('gameType')!);
      this.gameState().gameType = this.getGameType(gameType);
    }
  }

  get getOverviewPlayers() {
    return this.gameState().overviewPlayers
  }

  addPlayerName() {
    const currentPlayers = this.gameState().overviewPlayers;

    if (currentPlayers.length < 8) {
      this.gameState.update(state => ({
        ...state,
        overviewPlayers: [
          ...state.overviewPlayers,
          {
            name: '',
            isAI: false,
            difficulty: Difficulty.Medium,
            wins: 0
          }
        ]
      }));

      // 3. Scrollbar-Prüfung beibehalten (Signals triggern das Rendering asynchron)
      setTimeout(() => this.checkScrollVisibility(), 100);
    }
  }

  addAIPlayer() {
    if (this.getOverviewPlayers.length < 8) {
      let randomNames = ['Borg', 'Data', 'Hal', 'Skynet', 'Jarvis', 'GlaDOS', 'Cortana', 'R2D2'];
      randomNames = randomNames.filter(value => this.gameForm.overviewPlayers().value().find(formValue => formValue.name === "KI-" + value) === undefined)
      const randomName = 'KI-' + randomNames[Math.floor(Math.random() * randomNames.length)];
      const kiPlayer = {
        name: randomName,
        isAI: true,
        difficulty: Difficulty.Medium,
        wins: 0
      };
      this.gameState.update(state => ({
        ...state,
        overviewPlayers: [
          ...state.overviewPlayers,
          kiPlayer
        ]
      }));
      this.cdr.detectChanges();
      setTimeout(() => this.checkScrollVisibility(), 100);
    }
  }

  removePlayerName(index: number) {
    this.gameState.update(state => {
      const newPlayers = [...state.overviewPlayers];
      newPlayers.splice(index, 1);
      return {
        ...state,
        overviewPlayers: newPlayers
      };
    });
    setTimeout(() => this.checkScrollVisibility(), 100);
  }

  onSubmit() {
    const players: OverviewPlayer[] = this.gameState().overviewPlayers;
    const gameType = this.gameState().gameType;
    const maxRounds = this.gameState().maxRounds;

    const queryParams = {gameType, players: JSON.stringify(players), maxRounds};
    if (gameType == GameType.Cricket) {
      this.router.navigate(['cricketboard'], {queryParams});
    } else {
      this.router.navigate(['dartboard'], {queryParams});
    }
    localStorage.setItem('playerNames', JSON.stringify(players));
    localStorage.setItem('gameType', JSON.stringify(gameType));
  }

  onReset(event: Event) {
    event.preventDefault();
    // Erstellt eine komplett frische, tiefe Kopie des Standard-Zustands
    const freshOverviewPlayers = structuredClone(this.defaultFormState.overviewPlayers);

    // Das Signal mit den neuen Objekt-Referenzen füttern
    this.gameState.set({
      ...this.defaultFormState,
      overviewPlayers: freshOverviewPlayers
    });
  }

  validateGameStart(playerNames: OverviewPlayer[]): boolean {
    const isMoreThenOnePlayer = playerNames.length > 0;
    const allPlayersHaveNames = !playerNames.some((val: any) => val.name === '' || val.name === null);
    const atLeastOneHuman = playerNames.some((val: any) => !val.isAI);
    return isMoreThenOnePlayer && allPlayersHaveNames && atLeastOneHuman;
  }

  getGameType(type: string) {
    switch (type) {
      case '501':
        return GameType.Simple501;
      case 'Cricket':
        return GameType.Cricket;
      case '501-DoubleOut':
        return GameType.DoubleOut501;
      case 'Elimination-301':
        return GameType.Elimination301;
      case 'Highscore':
        return GameType.Highscore;
      case 'Random-Hit':
      case 'RandomHit':
        return GameType.RandomHit;
      default:
        return GameType.Simple501;
    }
  }

  getWins(player: OverviewPlayer) {
    let savedPlayersEqualActual = false
    const players: OverviewPlayer[] = this.gameState().overviewPlayers;
    if (localStorage.getItem('playerNames')) {
      const savedPlayers: OverviewPlayer[] = JSON.parse(localStorage.getItem('playerNames')!);
      if (this.getOverviewPlayers.length === savedPlayers.length) {
        const savedNames = savedPlayers.map(value => value.name)
        const currentNames = players.map(value => value.name)
        savedPlayersEqualActual = savedNames.every((value) => currentNames.includes(value))
      }

    }
    if (savedPlayersEqualActual) {
      return player.wins
    } else {
      players.forEach(player => player.wins = 0)
      localStorage.setItem('playerNames', JSON.stringify(players));
      return 0;
    }
  }

  protected drop($event: CdkDragDrop<string[]>) {
    const playerNamesToMove = [...this.gameState().overviewPlayers];

    moveItemInArray(playerNamesToMove, $event.previousIndex, $event.currentIndex);

    this.gameState.update(state => ({
      ...state,
      overviewPlayers: playerNamesToMove
    }));
  }

}
