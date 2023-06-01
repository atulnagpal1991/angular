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
  "https://www.rivercitycorp.in/images/7.png";

public wafflesRecipe = `
    We are a global UX design studio accelerating creative growth
  `;

  public description = `The modern banana bread recipe began being published in cookbooks around the 1930s and its popularity was greatly helped by the introduction of baking powder on the market. Some food historians believe banana bread was a byproduct of the Great Depression as resourceful housewives did not wish to throw away overripe bananas (as they were still a costly item to purchase), others believe the modern banana bread was developed in corporate kitchens to promote flour and baking soda products.`;

  
  code = `
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
    <button kendoPopoverAnchor [popover]="myPopover" kendoButton themeColor="primary" [style.marginLeft.px]="200">
    Show Popover
  </button>

  <kendo-popover #myPopover [width]="300" position="bottom">
    <ng-template kendoPopoverTitleTemplate>
      <div class="popover-title">River City Corporation</div>
    </ng-template>

    <ng-template kendoPopoverBodyTemplate>
      <img class="picture" src="https://www.rivercitycorp.in/images/7.png" />
      <div>We are a global UX design studio accelerating creative growth</div>
    </ng-template>

    <ng-template kendoPopoverActionsTemplate>      
        Our UX Service
    </ng-template>
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
