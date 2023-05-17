import { Component } from '@angular/core';
import { DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { DrawerPosition } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public selected = 'Buttons';

  public items: Array<{text: string; icon: string; selected?: boolean} | {separator: boolean}> = [
      { text: 'Buttons', icon: "tab", selected: true },
      { text: 'Drag Drop', icon: "tab" },
      { text: 'Filtering' , icon: "tab"},
      { text: 'Load More' , icon: "tab"},
      { text: 'Tree List' , icon: "tab"},
      { text: 'Tooltips', icon: "tab" },
      { text: 'Popover', icon: "tab" },
      { text: 'Notification', icon: "tab"},
      { text: 'Pagination' , icon: "tab"},
      { text: 'PDF Export', icon: "tab" },  
      { text: 'Stepper', icon: "tab" },  
      { text: 'Dialogs', icon: "tab" }, 
      { text: 'Split Button', icon: "tab" },  
      { text: 'Data Grid', icon: "tab" },  
      { text: 'List Box', icon: "tab" },  
      { text: 'Excel Export', icon: "tab" }, 
      { text: 'Chat' , icon: "tab"},  
      { text: 'Editor', icon: "tab" },  
      { text: 'Scheduler' , icon: "tab"},  
      { text: 'List View', icon: "tab" },  
      // { separator: true },    
      // { text: 'Drop Down Button' },  
      // { separator: true },

      
      
  ];

  public position: DrawerPosition = "start";
  public onSelect(ev: DrawerSelectEvent): void {
      this.selected = ev.item.text;
  }
  public onPositionChange(checked: boolean): void {
    this.position = checked ? "start" : "end";
  }
}
