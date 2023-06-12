import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class InputComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl("", Validators.email),
    acceptNews: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.registerForm.reset();
  }


  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];

  public data: string[] = ["foo", "bar", "baz"];


  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <h5>Input</h5>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Default View</p>
        <kendo-floatinglabel text="Enter First Name">
          <input kendoTextBox name="firstName" />
        </kendo-floatinglabel>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Filled View</p>
        <kendo-floatinglabel text="Enter First Name">
          <input kendoTextBox name="firstName" value="Jhon" />
        </kendo-floatinglabel>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Disabled View</p>
        <kendo-floatinglabel text="Enter First Name">
          <input kendoTextBox name="firstName" [disabled]="true" />
        </kendo-floatinglabel>
      </div>
    </div>
    <div class="example-col row icon-input">
      <h5>Input with icon</h5>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Default View</p>
        <kendo-floatinglabel [labelCssClass]="'custom-label-class'" text="Enter Email">
          <kendo-textbox>
            <ng-template kendoTextBoxPrefixTemplate>
              <span class="k-icon k-i-email"></span>
              <kendo-textbox-separator></kendo-textbox-separator>
            </ng-template>
          </kendo-textbox>
        </kendo-floatinglabel>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Filled View</p>
        <kendo-floatinglabel [labelCssClass]="'custom-label-class'" text="Enter Email">
          <kendo-textbox value="john@gmail.com">
            <ng-template kendoTextBoxPrefixTemplate>
              <span class="k-icon k-i-email"></span>
              <kendo-textbox-separator></kendo-textbox-separator>
            </ng-template>
          </kendo-textbox>
        </kendo-floatinglabel>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Disabled View</p>
        <kendo-floatinglabel [labelCssClass]="'custom-label-class'" text="Enter Email">
          <kendo-textbox [disabled]="true">
            <ng-template kendoTextBoxPrefixTemplate>
              <span class="k-icon k-i-email"></span>
              <kendo-textbox-separator></kendo-textbox-separator>
            </ng-template>
          </kendo-textbox>
        </kendo-floatinglabel>
      </div>
    </div>
    <div class="example-col row">
      <h5>Autocomplete</h5>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Default View</p>
        <kendo-autocomplete [data]="listItems" placeholder="Type here...">
          <ng-template kendoAutoCompleteItemTemplate let-dataItem>
            <span>{{ dataItem }}</span>
          </ng-template>
        </kendo-autocomplete>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Filled View</p>
        <kendo-autocomplete [data]="listItems" placeholder="Type here..." value="input 1">
          <ng-template kendoAutoCompleteItemTemplate let-dataItem>
            <span>{{ dataItem }}</span>
          </ng-template>
        </kendo-autocomplete>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Disabled View</p>
        <kendo-autocomplete [data]="listItems" placeholder="Type here..." [disabled]="true">
        <ng-template kendoAutoCompleteItemTemplate let-dataItem>
          <span>{{ dataItem }}</span>
        </ng-template>
        </kendo-autocomplete>
      </div>
    </div>
    <div class="example-col row">
      <h5>Select</h5>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Default View</p>
        <kendo-floatinglabel text="Select value">
          <kendo-dropdownlist [data]="data">
          </kendo-dropdownlist>
        </kendo-floatinglabel>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Selected View</p>
        <kendo-floatinglabel text="Select value">
          <kendo-dropdownlist [data]="data" value="Bar">
          </kendo-dropdownlist>
        </kendo-floatinglabel>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Disabled View</p>
        <kendo-floatinglabel text="Select value">
          <kendo-dropdownlist [data]="data" [disabled]="true">
          </kendo-dropdownlist>
        </kendo-floatinglabel>
      </div>
    </div>
  </div>
  `

  code1 = `
  import { Component, ViewEncapsulation   } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class InputComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl("", Validators.email),
    acceptNews: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.registerForm.reset();
  }

  
  public listItems: Array<string> = ["Item 1", "Item 2", "Item 3"];
  
  public data: string[] = ["foo", "bar", "baz"];
  
}
  `

}
