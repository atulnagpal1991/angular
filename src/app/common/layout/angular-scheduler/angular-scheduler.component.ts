import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';

@Component({
  selector: 'app-angular-scheduler',
  templateUrl: './angular-scheduler.component.html',
  styleUrls: ['./angular-scheduler.component.css']
})
export class AngularSchedulerComponent {
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
}
