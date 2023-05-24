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
  public min = 0;
  public max = 10;
  public smallStep = 1;
}
