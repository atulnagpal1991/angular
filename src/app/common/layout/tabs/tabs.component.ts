import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  code = `
  <div class="example-wrapper inner-tab">
    <div class="example-col">
      <kendo-tabstrip (tabSelect)="onTabSelect($event)">
        <kendo-tabstrip-tab title="Paris" [selected]="true">
          <ng-template kendoTabContent>
            <div class="content">
              <img
                src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/rainy.png" />
              <h2>17<span>ºC</span></h2>
              <span>Rainy weather in Paris.</span>
            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="New York City" [disabled]="true">
          <ng-template kendoTabContent>
            <div class="content">
              <img
                src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/cloudy.png" />
              <h2>19<span>ºC</span></h2>
              <span>Cloudy weather in New York City.</span>
            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="Tallinn">
          <ng-template kendoTabContent>
            <div class="content">
              <img
                src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/sunny.png" />
              <h2>23<span>ºC</span></h2>
              <span>Sunny weather in Tallinn.</span>
            </div>
          </ng-template>
        </kendo-tabstrip-tab>
        <kendo-tabstrip-tab title="London">
          <ng-template kendoTabContent>
            <div class="content">
              <img
                src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/rainy.png" />
              <h2>16<span>ºC</span></h2>
              <span>Rainy weather in London.</span>
            </div>
          </ng-template>
        </kendo-tabstrip-tab>
      </kendo-tabstrip>
    </div>
  </div>
  `
 
  code1 = `
  import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
  `
}
