import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from "@angular/router";
import {GameType} from '../../../models/enum/GameType';
import {Difficulty} from "../../../models/player/player.model";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";

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
    CdkDrag
  ],
})
export class GameSelectionComponent implements OnInit {


  // Create a reference, to make the enum accessible in the html-template
  gameType = GameType;
  difficulty = Difficulty;

  private fb = inject(FormBuilder)
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  formGroup = this.fb.group({
    gameType: this.fb.control<any>(GameType.Simple501),
    playerNames: this.fb.array<AbstractControl>([
      this.fb.group({
        name: this.fb.control('first'),
        isAI: this.fb.control(false),
        difficulty: this.fb.control(Difficulty.Medium)
      }),
      this.fb.group({
        name: this.fb.control('second'),
        isAI: this.fb.control(false),
        difficulty: this.fb.control(Difficulty.Medium)
      }),
    ]),
    maxRounds: this.fb.control<number>(3)
  });

  roundOptions = Array.from({length: 15}, (_, i) => (i + 1) * 3); // 3, 6, 9...45

  private readonly defaultFormState = {
    gameType: GameType.Simple501,
    playerNames: [
      {name: 'first', isAI: false, difficulty: Difficulty.Medium},
      {name: 'second', isAI: false, difficulty: Difficulty.Medium}
    ],
    maxRounds: 3
  }

  ngOnInit(): void {
    if (localStorage.getItem('playerNames')) {
      const savedPlayers = JSON.parse(localStorage.getItem('playerNames')!);
      if (savedPlayers.length > 0 && typeof savedPlayers[0] === 'string') {
        // Migration from old string array to new object array
        this.formGroup.setControl('playerNames', this.fb.array<AbstractControl>(savedPlayers.map((name: string) => this.fb.group({
          name: this.fb.control(name),
          isAI: this.fb.control(false),
          difficulty: this.fb.control(Difficulty.Medium)
        }))));
      } else {
        this.formGroup.setControl('playerNames', this.fb.array<AbstractControl>(savedPlayers.map((p: any) => this.fb.group({
          name: this.fb.control(p.name),
          isAI: this.fb.control(p.isAI || false),
          difficulty: this.fb.control(p.difficulty || Difficulty.Medium)
        }))));
      }
    }
    if (localStorage.getItem('gameType')) {
      const gameType = JSON.parse(localStorage.getItem('gameType')!);
      this.formGroup.controls.gameType.setValue(this.getGameType(gameType));
    }
  }

  get playerNames(): FormArray {
    return this.formGroup.get('playerNames') as FormArray;
  }

  addPlayerName() {
    if (this.playerNames.length < 8) {
      this.playerNames.push(this.fb.group({
        name: this.fb.control(''),
        isAI: this.fb.control(false),
        difficulty: this.fb.control(Difficulty.Medium)
      }));
      this.cdr.detectChanges();
    }
  }

  addAIPlayer() {
    if (this.playerNames.length < 8) {
      const randomNames = ['Borg', 'Data', 'Hal', 'Skynet', 'Jarvis', 'GlaDOS', 'Cortana', 'R2D2'];
      const randomName = 'KI-' + randomNames[Math.floor(Math.random() * randomNames.length)];
      const group = this.fb.group({
        name: this.fb.control(randomName),
        isAI: this.fb.control(true),
        difficulty: this.fb.control(Difficulty.Medium)
      });
      this.playerNames.push(group);
      this.cdr.detectChanges();
    }
  }

  removePlayerName(index: number) {
    this.playerNames.removeAt(index);

  }

  onSubmit() {
    const players = this.formGroup.controls.playerNames.value;
    const gameType = this.formGroup.value.gameType;
    const maxRounds = this.formGroup.value.maxRounds;

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
    // The reset event fires when a <form> is reset.
    // Required to prevent the default reset mechanism.
    // Otherwise, the form would be completely empty.
    event.preventDefault();
    this.formGroup.reset(this.defaultFormState);
    this.formGroup.setControl('playerNames', this.fb.array<AbstractControl>(this.defaultFormState.playerNames.map(p => this.fb.group({
      name: this.fb.control(p.name),
      isAI: this.fb.control(p.isAI),
      difficulty: this.fb.control(p.difficulty)
    }))));
  }

  validateGameStart(playerNames: FormArray): boolean {
    const isMoreThenOnePlayer = playerNames.controls.length > 0;
    const allPlayersHaveNames = !((playerNames.value as Array<any>).some((val: any) => val.name === '' || val.name === null));
    const atLeastOneHuman = (playerNames.value as Array<any>).some((val: any) => !val.isAI);
    return isMoreThenOnePlayer && allPlayersHaveNames && atLeastOneHuman;
  }

  protected drop($event: CdkDragDrop<string[]>) {
    let playerNamesToMove = this.playerNames.getRawValue();
    moveItemInArray(playerNamesToMove, $event.previousIndex, $event.currentIndex);
    this.playerNames.setValue(playerNamesToMove);
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
      default:
        return GameType.Simple501;
    }
  }
}
