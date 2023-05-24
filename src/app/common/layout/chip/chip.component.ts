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
