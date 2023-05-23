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
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <kendo-treeview
            kendoTreeViewHierarchyBinding
            [filterable]="true"
            [nodes]="data"
            childrenField="items"
            textField="text"
        >
        </kendo-treeview>
    ",
    styles: ["
        kendo-treeview {
            width: 250px;
        }
    "]
})
export class AppComponent {
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


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppComponent } from './app.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule } from '@angular/forms';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TreeViewModule,
        ButtonsModule,
        LabelModule,
        InputsModule,
        FormsModule
    ]
})
export class AppModule { }
`
}
