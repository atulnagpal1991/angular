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
  
  code = `
  <div class="example-wrapper">  
    <div class="example-col row">
      <h5>Drag the Button around</h5>
      <div class="container">
        <div *ngFor="let dropTarget of dropTargets" kendoDropTarget (dragEnter)="handleDragEnter(dropTarget)"
          (drop)="handleDrop(dropTarget)" (dragLeave)="handleDragLeave()" [ngClass]="{
      'my-drop': true,
      entered: enteredBox === dropTarget && enteredBox !== currentBox
    }">
          <button kendoButton kendoDragTarget *ngIf="currentBox === dropTarget" (press)="handlePress()"
            (release)="resetText()" (dragEnd)="resetText()" themeColor="primary">
            <span class="k-icon k-i-move k-icon-md"></span>
            {{ btnText }}
          </button>
          {{ currentBox !== dropTarget ? "Drop Here" : "" }}
        </div>
      </div>
    </div>
  </div>
`


code1 = `
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
`
}
