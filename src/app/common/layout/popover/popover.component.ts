import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public wafflesImg =
  "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/waffles.jpg";

public wafflesRecipe = `
      Body Content
  `;

  
  code = `
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <button kendoPopoverAnchor [popover]="myPopover" kendoButton
            [style.marginTop.px]="20">
                Show Popover
        </button>

        <kendo-popover #myPopover
            title="Popover Title"
            body="Popover Body">
        </kendo-popover>
    "
})
export class AppComponent {}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { AppComponent } from './app.component';

@NgModule({
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        TooltipsModule,
        DateInputsModule,
        ButtonsModule
    ]
})
export class AppModule { }
`
}
