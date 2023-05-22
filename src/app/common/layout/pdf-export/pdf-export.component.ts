import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-pdf-export',
  templateUrl: './pdf-export.component.html',
  styleUrls: ['./pdf-export.component.css']
})
export class PdfExportComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  code = `
  import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: "
    <kendo-pdf-export #pdf paperSize="A4" margin="2cm">
        content to be exported
    </kendo-pdf-export>

    <div class="example-config">
      <button kendoButton (click)="pdf.saveAs('contact_River_City_Corporation.pdf')">
        Export As PDF...
      </button>
    </div>
  "
})
export class AppComponent { }
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { IntlModule } from '@progress/kendo-angular-intl';
import { NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    IntlModule,
    FormsModule,
    NumericTextBoxModule,
    PDFExportModule,
    InputsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

`
}
