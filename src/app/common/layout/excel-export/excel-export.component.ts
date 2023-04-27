import { Component } from '@angular/core';
import { aggregateBy, AggregateDescriptor, AggregateResult, process } from '@progress/kendo-data-query';
import { Product, Group } from './models';
import { products } from './products';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.css']
})
export class ExcelExportComponent {
  public aggregates: AggregateDescriptor[] = [{field: 'UnitPrice', aggregate: 'sum'}];

  public group: Group[] = [{
      field: 'Discontinued',
      aggregates: this.aggregates
  }];

  public data: Product[] = process(products, {
      group: this.group
  }).data;

  public total: AggregateResult = aggregateBy(products, this.aggregates);
}
