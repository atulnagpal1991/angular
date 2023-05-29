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
      { separator: true }, 
      { text: 'Input', icon: "tab" },  
      { separator: true },   
      { text: 'Date and Time', icon: "tab" },  
      { separator: true },     
      { text: 'Checkbox and Radio', icon: "tab" },  
      { separator: true },    
      { text: 'Badge', icon: "tab" },  
      { separator: true },    
      { text: 'Breadcrumbs', icon: "tab" },  
      { separator: true },   
      { text: 'Tabs', icon: "tab" },  
      { separator: true },  
      { text: 'Tooltips', icon: "tab" },
      { separator: true },
      { text: 'Accordion', icon: "tab" },  
      { separator: true },   
      { text: 'Progress', icon: "tab" },  
      { separator: true },    
      { text: 'Pagination' , icon: "tab"},
      { separator: true },
      { text: 'Switch', icon: "tab" },  
      { separator: true },    
      { text: 'Slider', icon: "tab" },  
      { separator: true },   
      { text: 'Stepper', icon: "tab" },  
      { separator: true },
      { text: 'Dialogs', icon: "tab" }, 
      { separator: true },
      { text: 'Drag Drop', icon: "tab" },
      { separator: true },
      { text: 'Filtering' , icon: "tab"},
      { separator: true },
      { text: 'Load More' , icon: "tab"},
      { separator: true },
      { text: 'Tree List' , icon: "tab"},
      { separator: true },
      { text: 'Popover', icon: "tab" },
      { separator: true },
      { text: 'Notification', icon: "tab"},
      { separator: true },
      { text: 'PDF Export', icon: "tab" },  
      { separator: true },
      { text: 'Data Grid', icon: "tab" },  
      { separator: true },
      { text: 'List Box', icon: "tab" },  
      { separator: true },
      { text: 'Chat' , icon: "tab"},  
      { separator: true },
      { text: 'Editor', icon: "tab" },  
      { separator: true },
      { text: 'Scheduler' , icon: "tab"}, 
      { separator: true }, 
      { text: 'List View', icon: "tab" },  
      { separator: true },    
      // { text: 'Alert', icon: "tab" },  
      // { separator: true },  
      // { text: 'Excel Export', icon: "tab" }, 
      // { separator: true },
      // { text: 'Drop Down Button', icon: "tab" },
      // { separator: true }, 
      // { text: 'Split Button', icon: "tab" },    
      // { separator: true },
      // { text: 'Chip', icon: "tab" },  
      // { separator: true },   
      // { text: 'Autocomplete', icon: "tab" },  
      // { separator: true },  
      // { text: 'Select', icon: "tab" },  
      // { separator: true },    
      // { text: 'Autocomplete', icon: "tab" },  
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
