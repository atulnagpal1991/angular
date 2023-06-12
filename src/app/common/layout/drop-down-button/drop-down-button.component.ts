import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-drop-down-button',
  templateUrl: './drop-down-button.component.html',
  styleUrls: ['./drop-down-button.component.css']
})
export class DropDownButtonComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  data = [
    {
      text: "My Profile",
    },
    {
      text: "Friend Requests",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ];

  
  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
        <p>Default Button</p>
        <kendo-dropdownbutton [data]="data">
          User Settings
        </kendo-dropdownbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
        <p>Primary Button</p>
        <kendo-dropdownbutton [data]="data" themeColor="primary">
          User Settings
        </kendo-dropdownbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
        <p>Outline Button</p>
        <kendo-dropdownbutton [data]="data" fillMode="outline" themeColor="primary">
          User Settings
        </kendo-dropdownbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
        <p>Flat Button</p>
        <kendo-dropdownbutton [data]="data" [disabled]="true">
        User Settings
        </kendo-dropdownbutton>
      </div>
    </div>
  </div>
  `


code1 = `
import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-drop-down-button',
  templateUrl: './drop-down-button.component.html',
  styleUrls: ['./drop-down-button.component.css']
})
export class DropDownButtonComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  data = [
    {
      text: "My Profile",
    },
    {
      text: "Friend Requests",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ];
}
`
}
