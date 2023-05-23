import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public value = `
  <p>
  River City Corporation is a digital design agency that helps advance every facet of its client’s business with digital. We help design, build, and grow experience-driven digital products and platforms at speed and scale.
  </p>
  <div style="display: inline-block; width: 39%;">
      <p>Services include:</p>
      <ul>
          <li>User Experience</li>
          <li>Front-end Engineering</li>
          <li>Quality Assurance</li>
      </ul>
  </div>
  <div style="display: inline-block; width: 60%; vertical-align: top;">
      <img src="https://www.rivercitycorp.in/images/7.png" width="100%" style="min-width: 10px; min-height: 10px;" alt="Tenerife" />
  </div>
`;




code = `
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: " <kendo-editor [value]="value" style="height: 570px;"></kendo-editor> "
})
export class AppComponent {
    public value = "
    <p>
    River City Corporation is a digital design agency that helps advance every facet of its client’s business with digital. We help design, build, and grow experience-driven digital products and platforms at speed and scale.
    </p>
    <div style="display: inline-block; width: 39%;">
        <p>Services include:</p>
        <ul>
            <li>User Experience</li>
            <li>Front-end Engineering</li>
            <li>Quality Assurance</li>
        </ul>
    </div>
    <div style="display: inline-block; width: 60%; vertical-align: top;">
        <img src="https://www.rivercitycorp.in/images/7.png" width="100%" style="min-width: 10px; min-height: 10px;" alt="Tenerife" />
    </div>
    ";
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from '@progress/kendo-angular-editor';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        EditorModule,
        LabelModule,
        InputsModule,
        ButtonsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
`
}
