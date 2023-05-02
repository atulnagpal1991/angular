import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.css']
})
export class SplitButtonComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public data = [
    {
      text: "Keep Text Only",
      icon: "clipboard-text",
      click: (): void => {
        console.log("Keep Text Only");
      },
    },
    {
      text: "Paste as HTML",
      icon: "clipboard-code",
      click: (): void => {
        console.log("Paste as HTML");
      },
    },
    {
      text: "Paste Markdown",
      icon: "clipboard-markdown",
      click: (): void => {
        console.log("Paste Markdown");
      },
    },
    {
      text: "Set Default Paste",
      click: (): void => {
        console.log("Set Default Paste");
      },
    },
  ];

  public onPaste(): void {
    console.log("Paste");
  }

  
  code = `
  import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Default Button</p>
            <kendo-splitbutton (buttonClick)="onPaste()" [data]="data" icon="clipboard">
                Paste
            </kendo-splitbutton>
          </div>

          <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Flat Button</p>
            <kendo-splitbutton (buttonClick)="onPaste()" [data]="data" icon="clipboard" fillMode="flat">
                Paste
            </kendo-splitbutton>
          </div>

          <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Outline Button</p>
            <kendo-splitbutton (buttonClick)="onPaste()" [data]="data" icon="clipboard" fillMode="outline">
                Paste
            </kendo-splitbutton>
          </div>
        </div>
    "
})
export class AppComponent {
    public data = [{
        text: 'Keep Text Only',
        icon: 'clipboard-text',
        click: (): void => { console.log('Keep Text Only'); }
    }, {
        text: 'Paste as HTML',
        icon: 'clipboard-code',
        click: (): void => { console.log('Paste as HTML'); }
    }, {
        text: 'Paste Markdown',
        icon: 'clipboard-markdown',
        click: (): void => { console.log('Paste Markdown'); }
    }, {
        text: 'Set Default Paste',
        click: (): void => { console.log('Set Default Paste'); }
    }];

    public onPaste(): void {
        console.log('Paste');
    }
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, ButtonsModule],
})
export class AppModule {}
`
}
