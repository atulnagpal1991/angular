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
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <div kendoTooltip>
            <button kendoButton title="Saves the current document">Save</button>
        </div>
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
