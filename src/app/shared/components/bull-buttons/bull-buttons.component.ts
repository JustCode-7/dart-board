import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {ShapeMorphDirective} from "../../directive/shape-morph.directive";
import {customRipple} from "../../utils/util";

@Component({
  selector: 'app-bull-buttons',
  templateUrl: './bull-buttons.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatRippleModule,
    ShapeMorphDirective,
  ],
})
export class BullButtonsComponent {
  protected readonly customRipple = customRipple;

  @Output() bullClick = new EventEmitter<void>();
  @Output() bullseyeClick = new EventEmitter<void>();
  @Input() disabled: boolean = false;

  scoreBull() {
    this.bullClick.emit();
  }

  scoreBullsEye() {
    this.bullseyeClick.emit();
  }
}
