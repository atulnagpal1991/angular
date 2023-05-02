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


code = `
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template: "
        <div class="example-wrapper">
            <div class="example-col">
              <p>Button</p>
              <button kendoButton (click)="onButtonClick()">Default</button>
              <button kendoButton (click)="onButtonClick()" themeColor="primary">Primary</button>
              <button kendoButton (click)="onButtonClick()" [disabled]="true">Disabled</button>
            </div>
            <div class="example-col">
              <p>ButtonGroup</p>
              <kendo-buttongroup>
                <button kendoButton [toggleable]="true">
                  Option A
                </button>
                <button kendoButton [toggleable]="true">
                  Option B
                </button>
                <button kendoButton [toggleable]="true">
                  Option C
                </button>
              </kendo-buttongroup>
            </div>
            <div class="example-col">
                <p>DropDownButton</p>
                <kendo-dropdownbutton
                    [data]="dropDownButtonItems"
                    icon="gear"
                    title="User Settings"
                    (itemClick)="onSplitButtonItemClick($event)">
                    User Settings
                </kendo-dropdownbutton>
            </div>
            <div class="example-col">
                <p>SplitButton</p>
                <kendo-splitbutton
                    [data]="splitButtonItems"
                    icon="clipboard"
                    title="Paste"
                    (itemClick)="onSplitButtonItemClick($event)"
                    (buttonClick)="onSplitButtonClick()">
                    Paste
                </kendo-splitbutton>
            </div>
            <div class="example-col">
                <p>Chip</p>
                <kendo-chip-list selection="multiple">
                    <kendo-chip
                        *ngFor="let chip of chips"
                        [label]="chip.label"
                        [iconClass]="chip.iconClass"
                    ></kendo-chip>
                </kendo-chip-list>
            </div>
            <div class="example-col">
                <kendo-floatingactionbutton
                    icon="plus"
                    text="Add New"
                    title="Add New"
                    [align]="{ horizontal: 'start', vertical: 'bottom' }"
                    (click)="onFabClick()"
                >
                </kendo-floatingactionbutton>
            </div>
            <div class="example-col">
                <kendo-floatingactionbutton
                    icon="share"
                    [dialItems]="fabItems"
                >
                </kendo-floatingactionbutton>
            </div>
        </div>
    ",
    styles: ["
        .example-wrapper,.example-col{ vertical-align: top; }

        .pedro {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/SPLIR.jpg");
        }

        .thomas {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg");
        }

        .christina {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/BERGS.jpg");
        }

        .paula {
            background-image: url("https://demos.telerik.com/kendo-ui/content/web/Customers/RATTC.jpg");
        }
    "],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public imageUrl = 'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';

    public fabItems = [
        { icon: 'google', label: 'Google' },
        { icon: 'reddit', label: 'Reddit' },
        { icon: 'dribbble', label: 'Dribbble' }
    ];

    public splitButtonItems = [{
        text: 'Keep Text Only',
        icon: 'clipboard-text',
        click: (): void => { console.log('Keep Text Only click handler'); }
    }, {
        text: 'Paste as HTML',
        icon: 'clipboard-code'
    }, {
        text: 'Paste Markdown',
        icon: 'clipboard-markdown'
    }, {
        text: 'Set Default Paste'
    }];

    public dropDownButtonItems = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];

    public chips = [
        {
            label: 'Pedro Afonso',
            iconClass: 'k-chip-avatar pedro'
        },
        {
            label: 'Thomas Hardy',
            iconClass: 'k-chip-avatar thomas'
        },
        {
            label: 'Christina Berg',
            iconClass: 'k-chip-avatar christina'
        },
        {
            label: 'Paula Wilson',
            iconClass: 'k-chip-avatar paula'
        }
    ];

    public onFabClick(): void {
        console.log('Added');
    }

    public onSplitButtonClick(): void {
        console.log('Paste');
    }

    public onSplitButtonItemClick(dataItem: {[key:string]:unknown}): void {
        if (dataItem) {
            console.log(dataItem.text);
        }
    }

    public onButtonClick(): void {
        console.log('click');
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
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
    imports:      [BrowserModule, BrowserAnimationsModule, ButtonsModule]
})
export class AppModule {}
`

}
