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
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <button kendoButton *ngIf="!opened" (click)="open()">Open dialog</button>
        <kendo-dialog title="Please confirm" *ngIf="opened" (close)="close('cancel')" [minWidth]="250" [width]="450">
            <p style="margin: 30px; text-align: center;">Are you sure you want to continue?</p>
            <kendo-dialog-actions>
                <button kendoButton (click)="close('no')">No</button>
                <button kendoButton (click)="close('yes')" themeColor="primary">Yes</button>
            </kendo-dialog-actions>
        </kendo-dialog>
    "
})
export class AppComponent {
    public opened = true;

    public close(status: string): void {
        this.opened = false;
    }

    public open(): void {
        this.opened = true;
    }
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, BrowserAnimationsModule, DialogsModule, ButtonsModule, InputsModule, FormsModule ]
})
export class AppModule {}
`
}
