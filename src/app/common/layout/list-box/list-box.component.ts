import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public hot: string[] = [ 'Coffee', 'Tea', 'Green tea', 'Chocolate milk', 'Hot chocolate', 'Coconut milk'];
  public cold: string[] = [ 'Juice', 'Milkshake', 'Water', 'Lemonade', 'Soda', 'Smoothie' ];
  
  code = `
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <kendo-listbox
            kendoListBoxDataBinding
            [data]="hot"
            [connectedWith]="asia"
        >
        </kendo-listbox>
        <kendo-listbox
            #asia
            [data]="cold"
            [toolbar]="false"
        >
        </kendo-listbox>
    ",
    styles: ["
        kendo-listbox {
            height: 270px;
            width: 240px;
        }

        kendo-listbox:nth-of-type(1) {
            margin-right: 8px;
        }
    "]
})
export class AppComponent {
  public hot: string[] = [ 'Coffee', 'Tea', 'Green tea', 'Chocolate milk', 'Hot chocolate', 'Coconut milk'];
  public cold: string[] = [ 'Juice', 'Milkshake', 'Water', 'Lemonade', 'Soda', 'Smoothie' ];
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListBoxModule } from '@progress/kendo-angular-listbox';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, ListBoxModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
`
}
