import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public opened = true;

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }


  
  code = `
  <div class="example-wrapper">
            <div class="example-col">
              <button kendoButton *ngIf="!opened" (click)="open()">Open dialog</button>
              <kendo-dialog title="Please confirm" *ngIf="opened" (close)="close('cancel')" [minWidth]="250"
                [width]="450">
                <p style="margin: 30px; text-align: center;">
                  Are you sure you want to continue?
                </p>
                <kendo-dialog-actions>
                  <button kendoButton (click)="close('no')">No</button>
                  <button kendoButton (click)="close('yes')" themeColor="primary">
                    Yes
                  </button>
                </kendo-dialog-actions>
              </kendo-dialog>
            </div>
          </div>
`


code1 = `
import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public opened = true;

  public close(status: string): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}
`
}
