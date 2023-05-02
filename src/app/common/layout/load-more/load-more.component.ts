import { Component } from '@angular/core';
import { generateHierarchicalData } from "./data-generator";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public nodes: any[] = generateHierarchicalData(500, 2);
}
