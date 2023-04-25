import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  public current = 1;

  public steps = [
    { label: "Personal Info", icon: "user" },
    { label: "Education", icon: "book" },
    { label: "Attachments", icon: "paperclip", optional: true },
    { label: "Preview", icon: "eye" },
    { label: "Submit", icon: "file-add" },
  ];
}
