import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];
}
