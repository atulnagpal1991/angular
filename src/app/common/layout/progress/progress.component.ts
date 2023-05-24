import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  public value = 68;
  public chunks = 5;
}
