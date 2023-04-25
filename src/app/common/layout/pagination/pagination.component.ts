import { Component } from '@angular/core';
import { PageChangeEvent } from "@progress/kendo-angular-pager";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  public skip = 0;
  public pageSize = 10;

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
  }
}
