import { Component, ViewEncapsulation  } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwitchComponent {

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public checked = true;
  public disabled = true;
}
