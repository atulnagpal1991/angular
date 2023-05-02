import { Component } from '@angular/core';
import { PageChangeEvent } from "@progress/kendo-angular-pager";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public skip = 0;
  public pageSize = 10;

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
  }
  
  code = `
  import { Component } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-pager';

@Component({
    selector: 'my-app',
    template: "
        <kendo-datapager
            [total]="50"
            [pageSize]="pageSize"
            [skip]="skip"
            (pageChange)="onPageChange($event)"
        >
        </kendo-datapager>
    "
})
export class AppComponent {
    public skip = 0;
    public pageSize = 10;

    public onPageChange(e: PageChangeEvent): void {
        this.skip = e.skip;
        this.pageSize = e.take;
    }
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagerModule } from '@progress/kendo-angular-pager';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, PagerModule]
})
export class AppModule {}
`
}
