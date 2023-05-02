import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public dropTargets = ["A", "B"];
  public currentBox = "A";
  public enteredBox = "A";
  public btnText = "Press Me!";

  public handlePress(): void {
    this.btnText = "Drag Me!";
  }

  public handleDragEnter(id: string): void {
    this.enteredBox = id;

    if (this.enteredBox !== this.currentBox) {
      this.btnText = "Drop Me!";
    }
  }

  public handleDragLeave(): void {
    this.enteredBox = "";
    this.btnText = "Drag Me!";
  }

  public handleDrop(id: string): void {
    this.currentBox = id;
  }

  public resetText(): void {
    this.btnText = "Press Me!";
  }
}
