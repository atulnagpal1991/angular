import { Component } from '@angular/core';
import { PagerSettings } from '@progress/kendo-angular-listview';
import { destinations } from './destinations';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public destinations: any[] = destinations;

  public pagerSettings: PagerSettings = {
      previousNext: false,
      pageSizeValues: false,
      buttonCount: 9
  };
  public pageSize = 6;
}
