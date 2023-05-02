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
}
