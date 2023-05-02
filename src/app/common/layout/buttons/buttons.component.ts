import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

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
  },
  {
    label: "Thomas Hardy",
    iconClass: "k-chip-avatar thomas",
  },
  {
    label: "Christina Berg",
    iconClass: "k-chip-avatar christina",
  },
  {
    label: "Paula Wilson",
    iconClass: "k-chip-avatar paula",
  },
];

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


}
