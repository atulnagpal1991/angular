import { Component } from '@angular/core';
import { Employee, employees } from "./employees";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public data: Employee[] = employees;
}
