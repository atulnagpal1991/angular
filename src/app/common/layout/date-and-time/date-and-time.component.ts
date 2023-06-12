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
 
  `
 
  code1 = `
  
  `
}
