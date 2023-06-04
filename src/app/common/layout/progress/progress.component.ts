import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { ProgressBarAnimation } from "@progress/kendo-angular-progressbar";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  public animation1 = true;
  public chunks = 5;
  ngOnInit(): void {
    console.log('NG ON INIT')
    setTimeout(() => {
      this.changeProgress()
    }, 100)
    
  }

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
 

  public animation: ProgressBarAnimation = {
    duration: 2000,
  };
  public value = 0;
  public get text(): string {
    return this.value === 0 ? "Start" : "Reset";
  }

  public changeProgress(): void {
    this.value = this.value === 0 ? 68 : 0;
  }
}
