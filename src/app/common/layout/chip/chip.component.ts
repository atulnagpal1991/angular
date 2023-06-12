import { Component } from '@angular/core';
import { ChipRemoveEvent } from "@progress/kendo-angular-buttons";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

   public chips = [
    {
      label: "Apple",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-trash",
    },
    {
      label: "Strawberry",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-cancel-circle",
    },
    {
      label: "Banana",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x-outline",
    },
    {
      label: "Kiwi",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x",
    },
  ];

  public onRemove(e: ChipRemoveEvent): void {
    const index = this.chips.findIndex((c) => c.label === e.sender.label);
    this.chips.splice(index, 1);
  }

  code = `
  <div class="example-wrapper">
  <div class="example-col">
      <kendo-chip *ngFor="let chip of chips" [label]="chip.label" [selected]="chip.selected"
          [removable]="chip.removable" [removeIcon]="chip.removeIcon" (remove)="onRemove($event)">
      </kendo-chip>
  </div>
</div>
  `
 
  code1 = `
  import { Component } from '@angular/core';
import { ChipRemoveEvent } from "@progress/kendo-angular-buttons";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

   public chips = [
    {
      label: "Apple",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-trash",
    },
    {
      label: "Strawberry",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-cancel-circle",
    },
    {
      label: "Banana",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x-outline",
    },
    {
      label: "Kiwi",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x",
    },
  ];

  public onRemove(e: ChipRemoveEvent): void {
    const index = this.chips.findIndex((c) => c.label === e.sender.label);
    this.chips.splice(index, 1);
  }

}
  `

}
