import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  code = `
  <div class="example-wrapper">
  <div class="example-col row">
    <h5>On Hover Tooltips</h5>
    <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
      <div kendoTooltip class="right" position="right">
        <img src="assets/images/1.png" title="This tooltip is on the right">
      </div>              
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
      <div kendoTooltip class="bottom" position="bottom">
        <img src="assets/images/2.png"title="This tooltip is on the bottom">
      </div>              
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
      <div kendoTooltip class="left" position="left">
        <img src="assets/images/4.png" title="This tooltip is on the left">
      </div>              
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
      <div kendoTooltip class="top" position="top">
        <img src="assets/images/3.png" title="This tooltip is on the top">
      </div>              
    </div>
  </div>
</div>
`


code1 = `
import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
`
}
