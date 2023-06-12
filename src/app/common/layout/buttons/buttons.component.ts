import { Component, ViewEncapsulation } from '@angular/core';
import { ChipRemoveEvent } from "@progress/kendo-angular-buttons";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public current = 1;

  public imageUrl =
    "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png";

  public fabItems = [
    { icon: "google", label: "Google" },
    { icon: "reddit", label: "Reddit" },
    { icon: "dribbble", label: "Dribbble" },
  ];

  public splitButtonItems = [
    {
      text: "Keep Text Only",
      icon: "clipboard-text",
      click: (): void => {
        console.log("Keep Text Only click handler");
      },
    },
    {
      text: "Paste as HTML",
      icon: "clipboard-code",
    },
    {
      text: "Paste Markdown",
      icon: "clipboard-markdown",
    },
    {
      text: "Set Default Paste",
    },
  ];

  public dropDownButtonItems = [
    {
      text: "My Profile",
    },
    {
      text: "Friend Requests",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ];

  public chips = [
    {
      label: "Pedro Afonso",
      iconClass: "k-chip-avatar pedro",
      selected: false,
      removable: true,
      removeIcon: " ",
    },
    {
      label: "Thomas Hardy",
      iconClass: "k-chip-avatar thomas",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-trash",
    },
    {
      label: "Christina Berg",
      iconClass: "k-chip-avatar christina",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x-outline",
    },
    {
      label: "Paula Wilson",
      iconClass: "k-chip-avatar paula",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x",
    },
  ];

  public onRemove(e: ChipRemoveEvent): void {
    const index = this.chips.findIndex((c) => c.label === e.sender.label);
    this.chips.splice(index, 1);
  }

  public onFabClick(): void {
    console.log("Added");
  }

  public onSplitButtonClick(): void {
    console.log("Paste");
  }

  public onSplitButtonItemClick(dataItem: { [key: string]: unknown }): void {
    if (dataItem) {
      console.log(dataItem['text']);
    }
  }

  public onButtonClick(): void {
    console.log("click");
  }


  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <h5>Button</h5>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Default View</p>
        <button class="me-3" kendoButton (click)="onButtonClick()">Cancel</button>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Primary View</p>
        <button class="me-3" kendoButton (click)="onButtonClick()" themeColor="primary">
          Submit
        </button>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Outline View</p>
        <button class="me-3" kendoButton (click)="onButtonClick()" fillMode="outline"
          themeColor="primary">Save</button>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Disabled View</p>
        <button class="me-3" kendoButton (click)="onButtonClick()" [disabled]="true">
          Contact Us
        </button>
      </div>
    </div>

    <div class="example-col row">
      <h5>Button with icon</h5>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Default View</p>
        <button class="me-3" icon="gear" kendoButton (click)="onButtonClick()">Cancel</button>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Primary View</p>
        <button class="me-3" icon="gear" kendoButton (click)="onButtonClick()" themeColor="primary">
          Submit
        </button>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Outline View</p>
        <button class="me-3" icon="gear" kendoButton (click)="onButtonClick()" fillMode="outline"
          themeColor="primary">Save</button>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Disabled View</p>
        <button class="me-3" icon="gear" kendoButton (click)="onButtonClick()" [disabled]="true">
          Contact Us
        </button>
      </div>
    </div>
    <div class="example-col row">
      <h5>DropDownButton</h5>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Default View</p>
        <kendo-dropdownbutton [data]="dropDownButtonItems" icon="gear"
          (itemClick)="onSplitButtonItemClick($event)">
          Cancel
        </kendo-dropdownbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Primary View</p>
        <kendo-dropdownbutton [data]="dropDownButtonItems" icon="gear"
          (itemClick)="onSplitButtonItemClick($event)" themeColor="primary">
          Submit
        </kendo-dropdownbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Outline View</p>
        <kendo-dropdownbutton [data]="dropDownButtonItems" icon="gear"
          (itemClick)="onSplitButtonItemClick($event)" themeColor="primary" fillMode="outline">
          Save
        </kendo-dropdownbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Disabled View</p>
        <kendo-dropdownbutton [data]="dropDownButtonItems" icon="gear"
          (itemClick)="onSplitButtonItemClick($event)" [disabled]="true">
          Contact Us
        </kendo-dropdownbutton>
      </div>

    </div>
    <div class="example-col row">
      <h5>SplitButton</h5>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Default View</p>
        <kendo-splitbutton [data]="splitButtonItems" icon="clipboard"
          (itemClick)="onSplitButtonItemClick($event)" (buttonClick)="onSplitButtonClick()">
          Cancel
        </kendo-splitbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Primary View</p>
        <kendo-splitbutton [data]="splitButtonItems" icon="clipboard" themeColor="primary"
          (itemClick)="onSplitButtonItemClick($event)" (buttonClick)="onSplitButtonClick()">
          Submit
        </kendo-splitbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Outline View</p>
        <kendo-splitbutton [data]="splitButtonItems" icon="clipboard" themeColor="primary" fillMode="outline"
          (itemClick)="onSplitButtonItemClick($event)" (buttonClick)="onSplitButtonClick()">
          Save
        </kendo-splitbutton>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Disabled View</p>
        <kendo-splitbutton [data]="splitButtonItems" icon="clipboard" [disabled]="true"
          (itemClick)="onSplitButtonItemClick($event)" (buttonClick)="onSplitButtonClick()">
          Contact Us
        </kendo-splitbutton>
      </div>
    </div>

    <div class="example-col row">
      <h5>ButtonGroup</h5>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Default View</p>
        <kendo-buttongroup>
          <button kendoButton [toggleable]="true">Cancel </button>
          <button kendoButton [toggleable]="true">Submit</button>
          <button kendoButton [toggleable]="true">Save</button>
        </kendo-buttongroup>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Primary View</p>
        <kendo-buttongroup>
          <button kendoButton themeColor="primary" [toggleable]="true">Cancel</button>
          <button kendoButton themeColor="primary" [toggleable]="true">Submit</button>
          <button kendoButton themeColor="primary" [toggleable]="true">Save</button>
        </kendo-buttongroup>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Outline View</p>
        <kendo-buttongroup>
          <button kendoButton themeColor="primary" fillMode="outline" [toggleable]="true">Cancel</button>
          <button kendoButton themeColor="primary" fillMode="outline" [toggleable]="true">Submit</button>
          <button kendoButton themeColor="primary" fillMode="outline" [toggleable]="true">Save</button>
        </kendo-buttongroup>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-3 mb-3">
        <p>Disabled View</p>
        <kendo-buttongroup>
          <button kendoButton [disabled]="true" [toggleable]="true">Cancel</button>
          <button kendoButton [disabled]="true" [toggleable]="true">Submit</button>
          <button kendoButton [disabled]="true" [toggleable]="true">Save</button>
        </kendo-buttongroup>
      </div>

    </div>
    <div class="example-col">
      <h5>Chip</h5>
      <kendo-chip-list selection="multiple">
        <kendo-chip *ngFor="let chip of chips" [label]="chip.label" [removable]="chip.removable"
          [removeIcon]="chip.removeIcon" [iconClass]="chip.iconClass" (remove)="onRemove($event)"></kendo-chip>
      </kendo-chip-list>
    </div>
  </div>`


  code1 = `
  import { Component, ViewEncapsulation } from '@angular/core';
import { ChipRemoveEvent } from "@progress/kendo-angular-buttons";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public current = 1;

  public imageUrl =
    "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png";

  public fabItems = [
    { icon: "google", label: "Google" },
    { icon: "reddit", label: "Reddit" },
    { icon: "dribbble", label: "Dribbble" },
  ];

  public splitButtonItems = [
    {
      text: "Keep Text Only",
      icon: "clipboard-text",
      click: (): void => {
        console.log("Keep Text Only click handler");
      },
    },
    {
      text: "Paste as HTML",
      icon: "clipboard-code",
    },
    {
      text: "Paste Markdown",
      icon: "clipboard-markdown",
    },
    {
      text: "Set Default Paste",
    },
  ];

  public dropDownButtonItems = [
    {
      text: "My Profile",
    },
    {
      text: "Friend Requests",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ];

  public chips = [
    {
      label: "Pedro Afonso",
      iconClass: "k-chip-avatar pedro",
      selected: false,
      removable: true,
      removeIcon: " ",
    },
    {
      label: "Thomas Hardy",
      iconClass: "k-chip-avatar thomas",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-trash",
    },
    {
      label: "Christina Berg",
      iconClass: "k-chip-avatar christina",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x-outline",
    },
    {
      label: "Paula Wilson",
      iconClass: "k-chip-avatar paula",
      selected: false,
      removable: true,
      removeIcon: "k-icon k-i-x",
    },
  ];

  public onRemove(e: ChipRemoveEvent): void {
    const index = this.chips.findIndex((c) => c.label === e.sender.label);
    this.chips.splice(index, 1);
  }

  public onFabClick(): void {
    console.log("Added");
  }

  public onSplitButtonClick(): void {
    console.log("Paste");
  }

  public onSplitButtonItemClick(dataItem: { [key: string]: unknown }): void {
    if (dataItem) {
      console.log(dataItem['text']);
    }
  }

  public onButtonClick(): void {
    console.log("click");
  }
  `

}
