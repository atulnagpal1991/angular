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
  code = `
  <div class="example-wrapper">
  <div class="example-col row">
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <h5>Normal</h5>
      <kendo-autocomplete [data]="listItems" placeholder="Type here...">
        <ng-template kendoAutoCompleteItemTemplate let-dataItem>
          <span style="color: #f75814;">{{ dataItem }}</span>
        </ng-template>
      </kendo-autocomplete>
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <h5>Filled</h5>
      <kendo-autocomplete [data]="listItems" placeholder="Type here..." value="input 1">
        <ng-template kendoAutoCompleteItemTemplate let-dataItem>
          <span style="color: #f75814;">{{ dataItem }}</span>
        </ng-template>
      </kendo-autocomplete>
    </div>
    <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
      <h5>Disabled</h5>
      <kendo-autocomplete [data]="listItems" placeholder="Type here..." [disabled]="true">
        <ng-template kendoAutoCompleteItemTemplate let-dataItem>
          <span style="color: #f75814;">{{ dataItem }}</span>
        </ng-template>
      </kendo-autocomplete>
    </div>
  </div>
</div>
  `

  code1 = `
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
  `
}
