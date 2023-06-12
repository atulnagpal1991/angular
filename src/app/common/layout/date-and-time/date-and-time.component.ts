import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";


@Component({
  selector: 'app-date-and-time',
  templateUrl: './date-and-time.component.html',
  styleUrls: ['./date-and-time.component.css']
})
export class DateAndTimeComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  public disabled = true;
  public readonly = true;
  public value: Date = new Date(2022, 2, 10);
  public valueNew!: Date;
  public disabledDate!: Date;

  public disabledDates = (date: Date): boolean => {
    return date.getDate() % 2 === 0;
  };

  code = `
  <div class="example-wrapper">
    <div class="example-col row">
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Default View</p>
        <kendo-datetimepicker [incompleteDateValidation]="true" [(ngModel)]="valueNew"
        #dateModel="ngModel" #datetimepicker></kendo-datetimepicker>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        <p>Read-Only View</p>
        <kendo-datetimepicker [readonly]="readonly" [(ngModel)]="value"> </kendo-datetimepicker>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 mb-3">
        Disabled View
        <kendo-datetimepicker [disabled]="disabled"> </kendo-datetimepicker>
      </div>
    </div>
  </div>
  `
 
  code1 = `
  import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";


@Component({
  selector: 'app-date-and-time',
  templateUrl: './date-and-time.component.html',
  styleUrls: ['./date-and-time.component.css']
})
export class DateAndTimeComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  public disabled = true;
  public readonly = true;
  public value: Date = new Date(2022, 2, 10);
  public valueNew!: Date;
  public disabledDate!: Date;

  public disabledDates = (date: Date): boolean => {
    return date.getDate() % 2 === 0;
  };
  `
}
