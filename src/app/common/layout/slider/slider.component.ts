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
 
  `
 
  code1 = `
  
  `

}
