import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { ProgressBarAnimation } from "@progress/kendo-angular-progressbar";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  public animation1 = true;
  public chunks = 5;
  ngOnInit(): void {
    console.log('NG ON INIT')
    setTimeout(() => {
      this.changeProgress()
    }, 100)
    
  }

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
 

  public animation: ProgressBarAnimation = {
    duration: 2000,
  };
  public value = 0;
  public get text(): string {
    return this.value === 0 ? "Start" : "Reset";
  }

  public changeProgress(): void {
    this.value = this.value === 0 ? 68 : 0;
  }

  code = `
  <div class="example-wrapper">
  <div class="example-col row progressbar">
      <div class="col-12 mb-5">
          <p>Default View</p>
          <kendo-progressbar 
          [animation]="animation" [value]="value"> </kendo-progressbar>
      </div>
      <div class="col-md-6 mb-5">
          <p>Circular View</p>
          <kendo-circularprogressbar
          [animation]="animation1"
          [value]="value"
        >
          <ng-template
            kendoCircularProgressbarCenterTemplate
            let-value="value"
          >
            <span *ngIf="value !== 100" 
              >{{ value }} %</span
            >
            <span
              *ngIf="value === 100"
              class="k-icon k-i-check"
            ></span>
          </ng-template>
        </kendo-circularprogressbar>
      </div>
      <div class="col-md-6 mb-5">
          <p>Vertical View</p>
          <kendo-progressbar [animation]="animation"
           orientation="vertical" [value]="value"></kendo-progressbar>
      </div>

    <!-- <button kendoButton (click)="changeProgress()">{{ text }} progress</button> -->
  </div>
</div>
  `
 
  code1 = `
  import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { ProgressBarAnimation } from "@progress/kendo-angular-progressbar";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  public animation1 = true;
  public chunks = 5;
  ngOnInit(): void {
    console.log('NG ON INIT')
    setTimeout(() => {
      this.changeProgress()
    }, 100)
    
  }

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
 

  public animation: ProgressBarAnimation = {
    duration: 2000,
  };
  public value = 0;
  public get text(): string {
    return this.value === 0 ? "Start" : "Reset";
  }

  public changeProgress(): void {
    this.value = this.value === 0 ? 68 : 0;
  }
}
  `
}
