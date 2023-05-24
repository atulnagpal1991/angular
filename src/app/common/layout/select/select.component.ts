import { Component, ViewEncapsulation } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public data: string[] = ["foo", "bar", "baz"];
}
