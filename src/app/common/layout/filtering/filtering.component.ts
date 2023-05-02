import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        {
          text: "Sofas",
          items: [
            { text: "Bean Bag" },
            { text: "Armchair" },
            { text: "Modular" },
          ],
        },
        { text: "Occasional" },
      ],
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" },
      ],
    },
  ];
}
