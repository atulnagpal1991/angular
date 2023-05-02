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
}
