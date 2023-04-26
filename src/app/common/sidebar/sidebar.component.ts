import { Component } from '@angular/core';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public selected = 'Buttons';

  public items: Array<{text: string, selected?: boolean} | {separator: boolean}> = [
      { text: 'Buttons', selected: true },
      { separator: true },
      { text: 'Drag Drop' },
      { separator: true },
      { text: 'Filtering' },
      { separator: true },
      { text: 'Load More' },
      { separator: true },
      { text: 'Tree List' },
      { separator: true },
      { text: 'Tooltips' },
      { separator: true },
      { text: 'Popover' },
      { separator: true },
      { text: 'Notification'},
      { separator: true },
      { text: 'Pagination' },
      { separator: true },
      { text: 'PDF Export' },  
      { separator: true },
      { text: 'Stepper' },  
      { separator: true },
      { text: 'Dialogs' },  
      { separator: true },
      { text: 'Stepper' },  
      { separator: true },
      { text: 'Stepper' },  
      { separator: true },

      
      
  ];

  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
  }
}
