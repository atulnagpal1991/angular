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
 
  `
 
  code1 = `
  
  `
}
