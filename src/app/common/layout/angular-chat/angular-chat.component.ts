import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
import {
  Message,
  User,
  SendMessageEvent,
} from "@progress/kendo-angular-conversational-ui";

@Component({
  selector: 'app-angular-chat',
  templateUrl: './angular-chat.component.html',
  styleUrls: ['./angular-chat.component.css']
})
export class AngularChatComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public user: User = { id: 1 };

  public bot: User = { id: 0 };

  public messages: Message[] = [
    {
      author: this.bot,
      text: "Do you like Angular?",
    },
    {
      author: this.user,
      text: "Definitely!",
    },
  ];

  public sendMessage(e: SendMessageEvent): void {
    this.messages = [...this.messages, e.message];
  }
}
