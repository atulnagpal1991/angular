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
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Default Button</p>
            <p class="k-block">
                <kendo-dropdownbutton [data]="data">
                    User Settings
                </kendo-dropdownbutton>
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Primary Button</p>
            <p class="k-block">
                <kendo-dropdownbutton [data]="data" themeColor="primary">
                    User Settings
                </kendo-dropdownbutton>
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Outline Button</p>
            <p class="k-block">
                <kendo-dropdownbutton [data]="data" fillMode="outline">
                    User Settings
                </kendo-dropdownbutton>
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Flat Button</p>
            <p class="k-block">
                <kendo-dropdownbutton [data]="data" fillMode="flat">
                    User Settings
                </kendo-dropdownbutton>
            </p>
          </div>
        </div>
    "
})
export class AppComponent {
    data = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, ButtonsModule],
})
export class AppModule {}
`
}
