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
  <div class="example-wrapper">
    <div class="example-col row">
      <div class="col-xs-12 col-sm-6 mb-3">
        <h5>Popover On Click</h5>

        <button kendoPopoverAnchor [popover]="myPopover" kendoButton themeColor="primary">
          On Click
        </button>

        <kendo-popover #myPopover [width]="300" position="right">
          <ng-template kendoPopoverTitleTemplate>
            <div class="popover-title">River City Corporation</div>
          </ng-template>

          <ng-template kendoPopoverBodyTemplate>
            <img class="picture" [src]="wafflesImg" />
            <div>{{ wafflesRecipe }}</div>
          </ng-template>

          <ng-template kendoPopoverActionsTemplate>
            Our UX Service
          </ng-template>
        </kendo-popover>
      </div>
      <div class="col-xs-12 col-sm-6 mb-3">
        <h5>Popover On Hover</h5>
        <button kendoPopoverAnchor [popover]="myPopover" kendoButton themeColor="primary" 
        showOn="hover">
          On Hover
        </button>

        <kendo-popover #myPopover [width]="300" position="right">
          <ng-template kendoPopoverTitleTemplate>
            <div class="popover-title">River City Corporation</div>
          </ng-template>

          <ng-template kendoPopoverBodyTemplate>
            <img class="picture" [src]="wafflesImg" />
            <div>{{ wafflesRecipe }}</div>
          </ng-template>

          <ng-template kendoPopoverActionsTemplate>
            Our UX Service
          </ng-template>
        </kendo-popover>
        
      </div>
    </div>
  </div>
  `


  code1 = `
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

public wafflesRecipe = "
    We are a global UX design studio accelerating creative growth
  ";

  public description = "The modern banana bread recipe began being published in cookbooks around the 1930s and its popularity was greatly helped by the introduction of baking powder on the market. Some food historians believe banana bread was a byproduct of the Great Depression as resourceful housewives did not wish to throw away overripe bananas (as they were still a costly item to purchase), others believe the modern banana bread was developed in corporate kitchens to promote flour and baking soda products.";

}
`
}
