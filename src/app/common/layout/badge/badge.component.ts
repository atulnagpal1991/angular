import { Component } from '@angular/core';
import { BadgeAlign } from "@progress/kendo-angular-indicators";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  public badgeAlign: BadgeAlign = { vertical: "bottom", horizontal: "end" };

  code = `
  <div class="example-wrapper">
    <div class="example-col">
      <h5 class="mb-4">With Badge Container</h5>
      <div class="wrap mt-2">
        <kendo-badge-container>
          Available
          <kendo-badge themeColor="success" rounded="full"></kendo-badge>
        </kendo-badge-container>
        <kendo-badge-container>
          <kendo-icon name="copy"></kendo-icon>
          <kendo-badge [align]="badgeAlign" themeColor="dark">11</kendo-badge>
        </kendo-badge-container>
        <kendo-badge-container>
          <kendo-icon name="cart"></kendo-icon>
          <kendo-badge>4</kendo-badge>
        </kendo-badge-container>
        <kendo-badge-container>
          Sent Items
          <kendo-badge themeColor="tertiary">3</kendo-badge>
        </kendo-badge-container>
      </div>
      <h5 class="mt-5 mb-4">Without Badge Container</h5>
      <div class="wrap mt-2">
        <span class="updates">
          Offline
          <kendo-badge themeColor="primary" rounded="large"></kendo-badge>
        </span>
        <span class="files">
          <kendo-icon name="copy"></kendo-icon>
          <kendo-badge [align]="badgeAlign" themeColor="dark">11</kendo-badge>
        </span>
        <span class="shopping-cart">
          <kendo-icon name="cart"></kendo-icon>
          <kendo-badge>4</kendo-badge>
        </span>
        <span class="sent-items">
          Sent Items
          <kendo-badge themeColor="tertiary">34</kendo-badge>
        </span>
      </div>
    </div>
  </div>
  `
 
  code1 = `
  import { Component } from '@angular/core';
import { BadgeAlign } from "@progress/kendo-angular-indicators";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  public badgeAlign: BadgeAlign = { vertical: "bottom", horizontal: "end" };

}
  `
}
