import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public current = 1;

  public steps = [
    { label: "Personal Info", icon: "user" },
    { label: "Education", icon: "book" },
    { label: "Attachments", icon: "paperclip", optional: true },
    { label: "Preview", icon: "eye" },
    { label: "Submit", icon: "file-add" },
  ];



  code = `
  import { Component } from '@angular/core';

  @Component({
      selector: 'my-app',
      template: "
          <kendo-stepper
              [steps]="steps"
              stepType="full"
              [(currentStep)]="current"
              [linear]="false"
              [style.width.px]="570">
          </kendo-stepper>
      "
  })
  export class AppComponent {
      public current = 1;
  
      public steps = [
          { label: 'Personal Info', icon: 'user' },
          { label: 'Education', icon: 'book' },
          { label: 'Attachments', icon: 'paperclip', optional : true },
          { label: 'Preview', icon: 'eye' },
          { label: 'Submit', icon: 'file-add' }
      ];
  }
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './app.component';

@NgModule({
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        LayoutModule,
        IconsModule,
        InputsModule,
        LabelModule,
        ButtonsModule,
        DropDownsModule
    ],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {}
`


}
