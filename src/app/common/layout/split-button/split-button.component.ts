import { Component } from '@angular/core';

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.css']
})
export class SplitButtonComponent {
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
}
