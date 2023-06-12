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

  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <h5>Radio</h5>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Default View</p>
        <kendo-label [for]="male" text="Male" se></kendo-label>
        <input type="radio" name="gender" value="Male" #male kendoRadioButton />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Checked View</p>
        <kendo-label [for]="female" text="Female"></kendo-label>
        <input type="radio" name="gender" value="Female" #female kendoRadioButton checked />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Disabled View</p>
        <kendo-label [for]="other" text="Other"></kendo-label>
        <input type="radio" name="gender" value="Other" [disabled]="isDisabled" #other
        kendoRadioButton />
      </div>
    </div>
    <div class="example-col row">
      <h5>Checkbox</h5>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Default View</p>
        <kendo-label class="k-checkbox-label" [for]="default" text="Approve"></kendo-label>
        <input type="checkbox" #default kendoCheckBox />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Checked View</p>
        <kendo-label class="k-checkbox-label" [for]="selected" text="Select"></kendo-label>
        <input type="checkbox" #selected kendoCheckBox checked />
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Disabled View</p>
        <kendo-label class="k-checkbox-label" [for]="disabled" text="Other"></kendo-label>
        <input type="checkbox" #disabled kendoCheckBox [disabled]="isDisabled" />
      </div>
    </div>
  </div>
  `
 
  code1 = `
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
  `

}
