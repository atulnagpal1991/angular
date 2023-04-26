import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-button',
  templateUrl: './drop-down-button.component.html',
  styleUrls: ['./drop-down-button.component.css']
})
export class DropDownButtonComponent {
  data = [
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
}
