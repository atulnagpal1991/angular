import { Component } from '@angular/core';
import { NotificationService } from "@progress/kendo-angular-notification";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  constructor(private notificationService: NotificationService) { }

  public topRight(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "right", vertical: "top" },
      type: { style: "success", icon: true },
      // closable: true,
    });
  }

  public topLeft(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "left", vertical: "top" },
      type: { style: "warning", icon: true },
      // closable: true,
    });
  }

  public topCenter(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "center", vertical: "top" },
      type: { style: "info", icon: true },
      // closable: true,
    });
  }


  public bottomRight(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "right", vertical: "bottom" },
      type: { style: "success", icon: true },
      // closable: true,
    });
  }

  public bottomLeft(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "left", vertical: "bottom" },
      type: { style: "warning", icon: true },
      // closable: true,
    });
  }

  public bottomCenter(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "info", icon: true },
      // closable: true,
    });
  }

  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <div class="col"><button kendoButton (click)="topCenter()" themeColor="primary">Show Notification</button></div>
    </div>
  </div>
  `


  code1 = `
import { Component } from '@angular/core';
import { NotificationService } from "@progress/kendo-angular-notification";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  constructor(private notificationService: NotificationService) {}

  public topRight(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "right", vertical: "top" },
      type: { style: "success", icon: true },
      // closable: true,
    });
  }

  public topLeft(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "left", vertical: "top" },
      type: { style: "warning", icon: true },
    });
  }

  public topCenter(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "center", vertical: "top" },
      type: { style: "info", icon: true },
    });
  }

  
  public bottomRight(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "right", vertical: "bottom" },
      type: { style: "success", icon: true },
    });
  }

  public bottomLeft(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "left", vertical: "bottom" },
      type: { style: "warning", icon: true },
    });
  }

  public bottomCenter(): void {
    this.notificationService.show({
      content: "Your data has been saved.",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 100 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "info", icon: true },
    });
  }
}
`
}
