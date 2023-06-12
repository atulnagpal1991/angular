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
  <div>
  <kendo-tabstrip class="w-100" (tabSelect)="onTabSelect($event)">
    <kendo-tabstrip-tab title="app.component.html" [selected]="true">
      <ng-template kendoTabContent>
        <div class="content">
          <pre>
                  <code>{{code}}</code>
              </pre>
        </div>
      </ng-template>
    </kendo-tabstrip-tab>
    <kendo-tabstrip-tab title="app.component.ts">
      <ng-template kendoTabContent>
        <div class="content">
          <pre>
                  <code>{{code1}}</code>
              </pre>
        </div>
      </ng-template>
    </kendo-tabstrip-tab>
  </kendo-tabstrip>
</div>
`


code1 = `
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
}
`
}
