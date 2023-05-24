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
