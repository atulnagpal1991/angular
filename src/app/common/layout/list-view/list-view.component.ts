import { Component } from '@angular/core';
import { PagerSettings } from '@progress/kendo-angular-listview';
import { destinations } from './destinations';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {
  public destinations: any[] = destinations;

  public pagerSettings: PagerSettings = {
      previousNext: false,
      pageSizeValues: false,
      buttonCount: 9
  };
  public pageSize = 6;
}
