import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

import { StepType } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public current = 1;

  public steps = [
    { label: "Step 1", icon: "user" },
    { label: "Step 2", icon: "book" },
    { label: "Step 3", icon: "paperclip" },
    { label: "Step 4", icon: "eye" },
    { label: "Step 5", icon: "file-add" },
  ];

  public steps1 = [
    { label: "Happy", emoji: "😀" },
    { label: "Angry", emoji: "😠" },
    { label: "Cool", emoji: "😎" },
    { label: "Love", emoji: "😍" },
    { label: "Fear", emoji: "😨" },
  ];


  public stepType: StepType = "indicator";
  public stepTypes: Array<StepType> = ["indicator", "label", "full"];



  public prev(): void {
    if (this.current > 0) {
      this.current -= 1;
    }
  }

  public next(): void {
    if (this.current < this.steps.length - 1) {
      this.current += 1;
    }
  }


  public isLinear = true;



  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <div class="col-xs-12 col-sm-6 mb-3">
        <h5>Horizontal</h5>
        <kendo-stepper [steps]="steps" stepType="full" [(currentStep)]="current" [linear]="false"
        [style.width.px]="570">
        </kendo-stepper>
        <br><br>
        <kendo-stepper [steps]="steps1" stepType="full" [currentStep]="2" [linear]="false"
        [style.width.px]="570">
        <ng-template kendoStepperIndicatorTemplate let-step>
          <span class="emoji">{{ step.emoji }}</span>
        </ng-template>
        </kendo-stepper>
      </div>
      <div class="col-xs-12 col-sm-6 mb-3 text-center">
        <h5>Vertical</h5>
        <div class="d-flex justify-content-center">
          <kendo-stepper [style.width.px]="150" [steps]="steps" stepType="full" orientation="vertical">
          </kendo-stepper>
        </div>
      </div>
    </div>
  </div>
  `


code1 = `
import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

import { StepType } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public current = 1;

  public steps = [
    { label: "Step 1", icon: "user" },
    { label: "Step 2", icon: "book" },
    { label: "Step 3", icon: "paperclip" },
    { label: "Step 4", icon: "eye" },
    { label: "Step 5", icon: "file-add" },
  ];

  public steps1 = [
    { label: "Happy", emoji: "😀" },
    { label: "Angry", emoji: "😠" },
    { label: "Cool", emoji: "😎" },
    { label: "Love", emoji: "😍" },
    { label: "Fear", emoji: "😨" },
  ];


  public stepType: StepType = "indicator";
  public stepTypes: Array<StepType> = ["indicator", "label", "full"];



  public prev(): void {
    if (this.current > 0) {
      this.current -= 1;
    }
  }

  public next(): void {
    if (this.current < this.steps.length - 1) {
      this.current += 1;
    }
  }


  public isLinear = true;

}
`


}
