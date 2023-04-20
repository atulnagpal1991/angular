import { Component } from '@angular/core';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public selected = 'Buttons';

  public items: Array<{text: string, icon: string, selected?: boolean} | {separator: boolean}> = [
      { text: 'Buttons', icon: 'k-i-user', selected: true },
      { separator: true },
      { text: 'Drag Drop', icon: 'k-i-image' },
      { separator: true },
      { text: 'Filtering', icon: 'k-i-insert-top' },
      { separator: true },
      { text: 'Load More', icon: 'k-i-cells-merge-vertically' },
      { separator: true },
      { text: 'Five', icon: 'k-i-menu' },
      { separator: true },
      { text: 'Six', icon: 'k-i-col-resize' },
      { separator: true },
      { text: 'Seven', icon: 'k-i-align-justify' },
      { separator: true },
      { text: 'Eight', icon: 'k-i-list-ordered' },
      { separator: true },
      { text: 'Nine', icon: 'k-i-thumbnails-up' },
      { separator: true },
      { text: 'Ten', icon: 'k-i-grid' }
  ];

  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
  }
}
