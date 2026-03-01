import {ChangeDetectorRef, Component, HostListener, inject, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatRippleModule, ThemePalette} from "@angular/material/core";
import {CommonModule} from "@angular/common";
import {ShapeMorphDirective} from "../../../../shared/directive/shape-morph.directive";
import {DartService} from "../../../../services/dart.service";
import {BadgeHandleService} from "../../../../services/badge-handle.service";
import {ExplosionAnimationService} from "../../../../shared/animation/explosion-animation.service";
import {customRipple} from "../../../../shared/utils/util";
import {MultiplierService} from "../../../../services/multiplier.service";
import {CurrentPlayerService} from "../../../../services/current-player.service";

export interface InputButton {
  zahl: number;
  badge: boolean;
  badgeValue?: number;
}

@Component({
  selector: 'app-input-button-row',
  templateUrl: './input-button-row.component.html',
  styleUrls: ['./input-button-row.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatRippleModule,
    ShapeMorphDirective,
  ],
})
export class InputButtonRowComponent implements OnInit {

  public dartService: DartService = inject(DartService)
  protected badgeHandleService: BadgeHandleService = inject(BadgeHandleService)
  protected animationService = inject(ExplosionAnimationService)
  protected multiplierService = inject(MultiplierService);
  private cdr = inject(ChangeDetectorRef);
  protected currentPlayerService = inject(CurrentPlayerService);

  public screenOrientation: OrientationType = window.screen.orientation.type;
  protected readonly customRipple = customRipple;

  public readonly buttonGroups: InputButton[][] = [];

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
    if (this.badgeHandleService.twentyButtons.length === 0) {
      for (let i = 0; i < 20; i++) {
        this.badgeHandleService.twentyButtons.push({zahl: i + 1, badge: true});
      }
    }
    this.groupButtons();
    this.updateOrientation()
  }

  private groupButtons() {
    const btns = this.badgeHandleService.twentyButtons;
    // 1-5, 6-10, 11-15, 16-20
    for (let i = 0; i < 4; i++) {
      this.buttonGroups.push(btns.slice(i * 5, (i + 1) * 5));
    }
  }

  scoreBull() {
    this.badgeHandleService.matBadgeHiddenBull = false;
    this.badgeHandleService.bullBadgeCount = this.getBadgeCountValue();
    this.setBadgeCount();
    this.dartService.score({value: 25, multiplier: 1});
    this.animationService.playAnimationSound('assets/sounds/cow-moo-sound-effect.mp3');
    this.cdr.detectChanges();
  }

  scoreBullsEye() {
    this.badgeHandleService.matBadgeHiddenBullsEye = false;
    this.badgeHandleService.bullsEyeBadgeCount = this.getBadgeCountValue();
    this.setBadgeCount();
    this.dartService.score({value: 25, multiplier: 2});
    this.animationService.showExplosion('Bullseye', "red", 'assets/sounds/oh-yeah.mp3');
    this.cdr.detectChanges();
  }

  scoreWithMultiplier(inputButton: InputButton) {
    const multiplier = this.multiplierService.getMultiplier();
    this.multiplierService.reset();
    if (inputButton.badge) {
      this.setBadgeCount(inputButton);
    }
    this.multiplierAnimationCheck(multiplier, inputButton);
    this.dartService.score({value: inputButton.zahl, multiplier: multiplier});
    this.cdr.detectChanges();
  }

  private multiplierAnimationCheck(multiplier: number, inputButton: InputButton) {
    if (multiplier === 2) {
      this.animationService.playAnimationSound('assets/sounds/ship-bell-two-times.mp3');
    }
    if (multiplier === 3) {
      if (inputButton.zahl === 20) {
        this.animationService.tripleTwentyCounter++
        if (this.animationService.tripleTwentyCounter === 3) {
          this.animationService.showExplosion('180', "red", 'assets/sounds/opening-bell-triple.mp3');
        } else {
          this.animationService.showExplosion('T' + inputButton.zahl.toString(), "red", 'assets/sounds/good-result.mp3');
        }
      } else {
        this.animationService.tripleCounter++
        if (this.animationService.tripleCounter === 3) {
          this.animationService.showExplosion('TripleTriple last: T' + inputButton.zahl.toString(), "red", 'assets/sounds/oh-yeah.mp3');
        } else {
          this.animationService.showExplosion('T' + inputButton.zahl.toString(), "red", 'assets/sounds/firework-explosion.mp3');
        }

      }
    }
  }

  private setBadgeCount(inputButton?: InputButton) {
    this.badgeHandleService.tempBadgeValue++;
    if (inputButton) {
      inputButton.badgeValue = this.getBadgeCountValue();
      inputButton.badge = false;
    }
  }

  getBadgeCountValue() {
    return this.badgeHandleService.tempBadgeValue;
  }

  private updateOrientation() {
    this.screenOrientation = (window.innerHeight > window.innerWidth ? 'portrait-primary' : 'landscape-primary') as OrientationType;
  }
}
