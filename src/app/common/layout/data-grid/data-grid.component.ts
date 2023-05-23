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
  import { Component } from '@angular/core';
import { Product } from './model';

@Component({
    selector: 'my-app',
    template: "
        <kendo-grid [data]="gridData">
            <kendo-grid-column field="ProductID" title="ID"> </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name"> </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category"> </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price"> </kendo-grid-column>
        </kendo-grid>
    "
})
export class AppComponent {
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
export class Product {
  public ProductID: number;
  public ProductName = '';
  public Discontinued? = false;
  public UnitsInStock?: number;
  public UnitPrice = 0;
  public Category = {
      CategoryID: 0,
      CategoryName: ''
  };
}

export class Order {
  public OrderID: number;
  public CustomerID: string;
  public EmployeeID: number;
  public OrderDate: Date;
  public RequiredDate: Date;
  public ShippedDate: Date;
  public ShipVia: number;
  public Freight: number;
  public ShipName: string;
  public ShipAddress: string;
  public ShipCity: string;
  public ShipRegion: string;
  public ShipPostalCode: string;
  public ShipCountry: string;
}

export class Customer {
  public Id = '';
  public CompanyName = '';
  public ContactName = '';
  public ContactTitle = '';
  public Address?: string = '';
  public City = '';
  public PostalCode? = '';
  public Country? = '';
  public Phone? = '';
  public Fax? = '';
}

export class Category {
  public CategoryID?: number;
  public CategoryName?: string;
  public Description?: string;
}
`

}
