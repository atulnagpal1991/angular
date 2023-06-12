import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public data: any[] = [
    {
      text: "Drink",
      items: [
        {
          text: "Hot drink ",
          items: [
            { text: "Coffee" },
            { text: "Tea" },
            { text: "Green tea" },
            { text: "Chocolate milk" },
            { text: "Hot chocolate" },
          ],
        },
        { text: "Coconut milk " },
        { text: "Juice " },
        { text: "Milkshake " },
        { text: "Water " },
      ],
    },
    {
      text: "Cold drink ",
      items: [
        { text: "Lemonade" },
        { text: "Soda" },
        { text: "Smoothie" },
        { text: "Orange juice" },
      ],
    },
  ];

  
  code = `
  <div class="example-wrapper">
    <div class="example-col">
      <kendo-treeview kendoTreeViewHierarchyBinding [filterable]="true" [nodes]="data" childrenField="items"
        textField="text">
      </kendo-treeview>
    </div>
  </div>
`


code1 = `
import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public data: any[] = [
    {
      text: "Drink",
      items: [
        {
          text: "Hot drink ",
          items: [
            { text: "Coffee" },
            { text: "Tea" },
            { text: "Green tea" },
            { text: "Chocolate milk" },
            { text: "Hot chocolate" },
          ],
        },
        { text: "Coconut milk " },
        { text: "Juice " },
        { text: "Milkshake " },
        { text: "Water " },
      ],
    },
    {
      text: "Cold drink ",
      items: [
        { text: "Lemonade" },
        { text: "Soda" },
        { text: "Smoothie" },
        { text: "Orange juice" },
      ],
    },
  ];
}
`
}
