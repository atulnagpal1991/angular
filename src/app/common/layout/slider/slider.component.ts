import { Component, ViewEncapsulation  } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public tickPlacement = "none";
  public value = 5;
  public value1 = 5;
  public smallStep = 1;



  public valueHorizontal = 0;
  public valuesVertical: number[] = [10, 5, 0, 10, 15];
  public min = -20;
  public max = 20;
  public largeStep = 20;

  public showButtons = false;

  code = `
  <div class="example-wrapper">
  <div class="example-col row">
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <div style="text-align: center;">
        <kendo-label style="display: flex; justify-content: center;" text="Default View"></kendo-label>
        <kendo-slider [tickPlacement]="tickPlacement" [showButtons]="showButtons" [min]="min" [max]="max"
          [smallStep]="smallStep" [(ngModel)]="value"></kendo-slider>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <div style="text-align: center;">
        <kendo-label style="display: flex; justify-content: center;" text="Disabled View"></kendo-label>
        <kendo-slider [tickPlacement]="tickPlacement" [disabled]="true" [min]="min" [max]="max"
          [smallStep]="smallStep" [(ngModel)]="value1"></kendo-slider>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <div style="text-align: center;">
        <kendo-label style="display: flex; justify-content: center;" [for]="balance"
          text="Balance View"></kendo-label>

        <kendo-slider #balance [tickPlacement]="tickPlacement" [fixedTickWidth]="10" [min]="-10" [max]="10"
          [smallStep]="smallStep" [(ngModel)]="valueHorizontal">
          <kendo-slider-messages increment="Right" decrement="Left"></kendo-slider-messages>
        </kendo-slider>
        <div>{{ valueHorizontal }}</div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <div style="height: 300px; text-align: center;">
        <kendo-label style="display: flex; justify-content: center;" [for]="equalizer" text="Vertical View">
        </kendo-label>
        <div class="eqSlider">
          <kendo-slider #equalizer [tickPlacement]="tickPlacement" [vertical]="true" [showButtons]="false" [min]="min" [max]="max"
            [smallStep]="smallStep" [largeStep]="largeStep" [(ngModel)]="valuesVertical[0]"></kendo-slider>
          <p>{{ valuesVertical[0] }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  `
 
  code1 = `
  import { Component, ViewEncapsulation  } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public tickPlacement = "none";
  public value = 5;
  public value1 = 5;
  public smallStep = 1;



  public valueHorizontal = 0;
  public valuesVertical: number[] = [10, 5, 0, 10, 15];
  public min = -20;
  public max = 20;
  public largeStep = 20;

  public showButtons = false;
}
  `

}
