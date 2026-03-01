import {ChangeDetectorRef, Component, HostListener, inject, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatRippleModule, ThemePalette} from "@angular/material/core";
import {CommonModule} from "@angular/common";
import {ShapeMorphDirective} from "../../../../shared/directive/shape-morph.directive";
import {CricketService} from 'src/app/services/cricket.service';
import {CurrentPlayerService} from 'src/app/services/current-player.service';
import {PlayerService} from "../../../../services/player.service";
import {ExplosionAnimationService} from "../../../../shared/animation/explosion-animation.service";
import {customRipple} from "../../../../shared/utils/util";
import {MultiplierService} from "../../../../services/multiplier.service";


@Component({
  selector: 'app-input-button-row-cricket',
  templateUrl: './input-button-row-cricket.component.html',
  styleUrls: ['./input-button-row-cricket.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatRippleModule,
    ShapeMorphDirective,
  ],
})
export class InputButtonRowCricketComponent implements OnInit {
  protected readonly customRipple = customRipple;

  readonly buttonGroups: number[][] = [[15, 16], [17, 18], [19, 20], [25, 50]];
  public readonly border = "border border-5 border-warning"

  protected animationService = inject(ExplosionAnimationService)
  protected multiplierService = inject(MultiplierService);
  private cdr = inject(ChangeDetectorRef);
  public cricketService: CricketService = inject(CricketService);
  public currentPlayerService: CurrentPlayerService = inject(CurrentPlayerService);
  protected playerService: PlayerService = inject(PlayerService);
  public screenOrientation: OrientationType = window.screen.orientation.type;

  get buttonColor(): ThemePalette {
    const m = this.multiplierService.multiplier();
    if (m === 2) return 'accent';
    if (m === 3) return 'warn';
    return 'primary';
  }

  @HostListener('window:resize')
  onResize() {
    this.updateOrientation();
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.updateOrientation()
  }

  scoreBull() {
    this.cricketService.scoreCricketWithMultiplier({value: 25, multiplier: 1})
    this.animationService.playAnimationSound('assets/sounds/cow-moo-sound-effect.mp3');
    this.cdr.detectChanges();
  }

  scoreBullsEye() {
    this.cricketService.scoreCricketWithMultiplier({value: 25, multiplier: 2})
    this.animationService.showExplosion('Bullseye', "red", 'assets/sounds/oh-yeah.mp3');
    this.cdr.detectChanges();
  }

  scoreHit(value: number) {
    let multiplier = this.multiplierService.getMultiplier();
    this.multiplierService.reset();
    this.multiplierAnimationCheck(multiplier, value);
    this.cricketService.scoreCricketWithMultiplier({value, multiplier});
    this.cdr.detectChanges();
  }

  private multiplierAnimationCheck(multiplier: number, value: number) {
    if (multiplier === 2) {
      this.animationService.playAnimationSound('assets/sounds/ship-bell-two-times.mp3');
    }
    if (multiplier === 3) {
      if (value === 20 && this.currentPlayerService._currentPlayer.value.cricketMap.get(value) === 3) {
        this.animationService.tripleTwentyCounter++
        if (this.animationService.tripleTwentyCounter === 3) {
          this.animationService.showExplosion('180', "red", 'assets/sounds/opening-bell-triple.mp3');
        } else {
          this.animationService.showExplosion('T' + value.toString(), "red", 'assets/sounds/good-result.mp3');
        }
      } else {
        this.animationService.tripleCounter++
        if (this.animationService.tripleCounter === 3) {
          this.animationService.showExplosion('TripleTriple last: T' + value.toString(), "red", 'assets/sounds/oh-yeah.mp3');
        } else {
          this.animationService.showExplosion('T' + value.toString(), "red", 'assets/sounds/firework-explosion.mp3');
        }
      }
    }
  }

  getBadgeCountValue(primaryNumber: number) {
    return this.currentPlayerService._currentPlayer.value.cricketMap.get(primaryNumber) ?? "0";
  }

  isClosed(value: number) {
    if (this.playerService._players.length === 1) {
      return false;
    }
    if (value === 50 || value === 25) {
      if (value === 25) return this.currentPlayerService.isCricketBullClosed()
      if (value === 50) return this.currentPlayerService.isCricketBullClosed()
    }
    return this.currentPlayerService.isCricketNumberClosed(value)
  }

  isScorable(value: number) {
    if (this.playerService._players.length === 1) {
      return true;
    } else {
      const allOtherplayers = this.playerService._players.filter((player) => this.currentPlayerService._currentPlayer.value !== player)
      return allOtherplayers.some((player) =>
        player.cricketMap.get(value) !== 3)
    }
  }

  private updateOrientation() {
    this.screenOrientation = (window.innerHeight > window.innerWidth ? 'portrait-primary' : 'landscape-primary') as OrientationType;
  }

  justScore(value: number) {
    if (value === 25) {
      this.scoreBull()
    } else if (value === 50) {
      this.scoreBullsEye()
    } else {
      this.scoreHit(value)
    }

  }
}
