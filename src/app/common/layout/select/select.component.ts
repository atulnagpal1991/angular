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

  code = `
  <div class="example-wrapper">
  <div class="example-col row">
    <h5>Select</h5>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <p>Default View</p>
      <kendo-floatinglabel text="Select value">
        <kendo-dropdownlist [data]="data" [style.width.px]="180">
        </kendo-dropdownlist>
      </kendo-floatinglabel>
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <p>Selected</p>
      <kendo-floatinglabel text="Select value">
        <kendo-dropdownlist [data]="data" [style.width.px]="180" value="Bar">
        </kendo-dropdownlist>
      </kendo-floatinglabel>
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <p>Disabled View</p>
      <kendo-floatinglabel text="Select value">
        <kendo-dropdownlist [data]="data" [style.width.px]="180" [disabled]="true">
        </kendo-dropdownlist>
      </kendo-floatinglabel>
    </div>
  </div>
</div>
  `
 
  code1 = `
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
  `
}
