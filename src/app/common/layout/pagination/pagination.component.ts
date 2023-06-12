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

  public skip1 = 0;
  public pageSize1 = 10;

  public onPageChange(e: PageChangeEvent, pager='settings'): void {
    if(pager === 'settings') {
      this.skip1 = e.skip;
      this.pageSize1 = e.take;
    } else {
      this.skip = e.skip;
      this.pageSize = e.take;
    }
    
  }

  public buttonCount = 2;
  public sizes = [10, 20, 50];
  public total = 100;

  public sliderChange(pageIndex: number): void {
    this.skip = (pageIndex - 1) * this.pageSize;
  }


   
  code = `
  <div class="example-wrapper">
    <div class="example-col">
      <h5>Basics</h5>
      <kendo-datapager [total]="50" [pageSize]="pageSize" [skip]="skip" (pageChange)="onPageChange($event, 'basics')">
      </kendo-datapager>
      <h5 class="mt-5">Pager Settings</h5>
      <kendo-datapager style="width: 100%;" [pageSize]="pageSize1" [skip]="skip1" [total]="total"
      (pageChange)="onPageChange($event, 'settings')">
      <ng-template kendoDataPagerTemplate let-totalPages="totalPages" let-currentPage="currentPage">
        <div class="k-pager-numbers-wrap">
          <kendo-datapager-prev-buttons></kendo-datapager-prev-buttons>
          <kendo-datapager-numeric-buttons [buttonCount]="buttonCount"></kendo-datapager-numeric-buttons>
          <kendo-datapager-next-buttons></kendo-datapager-next-buttons>
        </div>
        <kendo-datapager-input></kendo-datapager-input>
        <kendo-datapager-info></kendo-datapager-info>
        <kendo-datapager-page-sizes [pageSizes]="sizes"></kendo-datapager-page-sizes>
      </ng-template>
      </kendo-datapager>
      <!-- <h5 class="mt-5">Slider</h5>
        <kendo-datapager style="width: 100%;" [pageSize]="pageSize" [skip]="skip" [total]="total"
          (pageChange)="onPageChange($event)">
          <ng-template kendoDataPagerTemplate let-totalPages="totalPages" let-currentPage="currentPage">
            <kendo-datapager-prev-buttons style="margin-right: 10px;"></kendo-datapager-prev-buttons>
            <kendo-slider [showButtons]="false" tickPlacement="none" [max]="totalPages" [min]="1"
              (valueChange)="sliderChange($event)" [value]="currentPage">
            </kendo-slider>
            <kendo-datapager-next-buttons style="margin-left: 10px;"></kendo-datapager-next-buttons>
            Page {{ currentPage }} of {{ totalPages }}
            <kendo-datapager-info></kendo-datapager-info>
          </ng-template>
        </kendo-datapager> -->
    </div>
  </div>
  `


code1 = `
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

  public skip1 = 0;
  public pageSize1 = 10;

  public onPageChange(e: PageChangeEvent, pager='settings'): void {
    if(pager === 'settings') {
      this.skip1 = e.skip;
      this.pageSize1 = e.take;
    } else {
      this.skip = e.skip;
      this.pageSize = e.take;
    }
    
  }

  public buttonCount = 2;
  public sizes = [10, 20, 50];
  public total = 100;

  public sliderChange(pageIndex: number): void {
    this.skip = (pageIndex - 1) * this.pageSize;
  }
}

`
}
