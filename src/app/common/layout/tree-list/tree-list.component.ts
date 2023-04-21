import { Component } from '@angular/core';
import { Employee, employees } from "./employees";

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent {
  public data: Employee[] = employees;
}
