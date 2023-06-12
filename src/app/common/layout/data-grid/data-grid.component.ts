import { Component } from '@angular/core';
import { Product } from "./model";
import { SelectEvent } from "@progress/kendo-angular-layout";
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public gridData: Product[] = [
    {
      ProductID: 1,
      ProductName: "Green tea",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Hot chocolate",
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Lemonade",
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: "Beverages",
      },
    },
  ];


  
  code = `
  <div class="example-wrapper">
    <div class="example-col">
      <kendo-grid [data]="gridData">
        <kendo-grid-column field="ProductID" title="ID"> </kendo-grid-column>
        <kendo-grid-column field="ProductName" title="Name"> </kendo-grid-column>
        <kendo-grid-column field="Category.CategoryName" title="Category">
        </kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Price"> </kendo-grid-column>
      </kendo-grid>
    </div>
  </div>
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            GridModule,
            ButtonsModule,
            InputsModule
        ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
`

code2 = `
import { Component } from '@angular/core';
import { Product } from "./model";
import { SelectEvent } from "@progress/kendo-angular-layout";
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public gridData: Product[] = [
    {
      ProductID: 1,
      ProductName: "Green tea",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Hot chocolate",
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Lemonade",
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: "Beverages",
      },
    },
  ];
}
`

}
