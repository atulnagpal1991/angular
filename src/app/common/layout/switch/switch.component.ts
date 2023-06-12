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

  code = `
  <div class="example-wrapper">
  <div class="example-col row">
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <p>Default View</p>
      <kendo-label text="New">
        <kendo-switch onLabel="On" offLabel="Off"></kendo-switch>
      </kendo-label>
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <p>Checked View</p>
      <kendo-label text="Available">
        <kendo-switch [(ngModel)]="checked" onLabel="On" offLabel="Off"></kendo-switch>
      </kendo-label>
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <p>Disabled View</p>
      <kendo-label text="Service">
        <kendo-switch [disabled]="disabled"></kendo-switch>
      </kendo-label>
    </div>
  </div>
</div>
  `
 
  code1 = `
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
  `
}
