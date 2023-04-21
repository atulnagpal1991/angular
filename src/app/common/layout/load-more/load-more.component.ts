import { Component } from '@angular/core';
import { generateHierarchicalData } from "./data-generator";

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent {
  public nodes: any[] = generateHierarchicalData(500, 2);
}
