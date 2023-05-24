import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  private baseImageUrl =
  "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

public imageUrl(imageName: string): string {
  return this.baseImageUrl + imageName + ".jpg";
}

}
