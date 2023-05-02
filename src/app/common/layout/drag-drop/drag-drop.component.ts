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
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "        <div class="example-wrapper">
            <div class="example-col">
              <h5>Drag the Button around</h5>
              <div class="container">
                <div *ngFor="let dropTarget of dropTargets"
                    kendoDropTarget
                    (dragEnter)="handleDragEnter(dropTarget)"
                    (drop)="handleDrop(dropTarget)"
                    (dragLeave)="handleDragLeave()"
                    [ngClass]="{'my-drop': true, 'entered': enteredBox === dropTarget && enteredBox !== currentBox}">
                        <button kendoButton kendoDragTarget
                            *ngIf="currentBox === dropTarget"
                            themeColor="primary">
                            <span class="k-icon k-i-move k-icon-md"></span>
                            Drag Me!
                        </button>
                        {{currentBox !== dropTarget ? 'Drop Here' : ''}}
                    </div>
                </div>
            </div>
        </div>
    ",
    styleUrls: ['./styles.css']
})

export class AppComponent {
    public dropTargets = ['A', 'B'];
    public currentBox = 'A';
    public enteredBox = 'A';

    public handleDragEnter(id: string): void {
        this.enteredBox = id;
    }

    public handleDragLeave(): void {
        this.enteredBox = '';
    }

    public handleDrop(id: string): void {
        this.currentBox = id;
    }
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UtilsModule } from '@progress/kendo-angular-utils';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ButtonsModule,
        UtilsModule
    ],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}
`
}
