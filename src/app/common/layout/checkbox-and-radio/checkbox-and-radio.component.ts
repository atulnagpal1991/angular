import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-checkbox-and-radio',
  templateUrl: './checkbox-and-radio.component.html',
  styleUrls: ['./checkbox-and-radio.component.css']
})
export class CheckboxAndRadioComponent {

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

 
  public isDisabled = true;

}
