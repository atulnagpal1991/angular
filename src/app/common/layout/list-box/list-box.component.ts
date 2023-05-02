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
  public europeanCountries: string[] = [ 'Germany', 'France', 'Austria', 'Belgium', 'Denmark', 'Netherlands'];
  public asianCountries: string[] = [ 'China', 'India', 'Indonesia', 'Nepal', 'Thailand', 'Yemen' ];
  
  code = `
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <kendo-listbox
            kendoListBoxDataBinding
            [data]="europeanCountries"
            [connectedWith]="asia"
        >
        </kendo-listbox>
        <kendo-listbox
            #asia
            [data]="asianCountries"
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
    public europeanCountries: string[] = [ 'Germany', 'France', 'Austria', 'Belgium', 'Denmark', 'Netherlands'];
    public asianCountries: string[] = [ 'China', 'India', 'Indonesia', 'Nepal', 'Thailand', 'Yemen' ];
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
