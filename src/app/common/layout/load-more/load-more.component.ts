import { Component } from '@angular/core';
import { generateHierarchicalData } from "./data-generator";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public nodes: any[] = generateHierarchicalData(500, 2);


  code = `
  <div class="example-wrapper">
    <div class="example-col">
      <kendo-treeview [nodes]="nodes" textField="text" kendoTreeViewExpandable kendoTreeViewHierarchyBinding
        childrenField="items" kendoTreeViewLoadMore [pageSize]="10">
      </kendo-treeview>
    </div>
  </div>
  `


  code1 = `
import { Component } from '@angular/core';
import { generateHierarchicalData } from "./data-generator";
import { SelectEvent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
  public nodes: any[] = generateHierarchicalData(500, 2);
}
`

  code2 = `
const names = ['Olive ', 'Aida ', 'Maureen', 'William', 'Allie', 'James', 'Daniel', 'David', 'Oliver', 'Alexander', 'Noah', 'Simon', 'Gage', 'Daniels', 'Benjamin', 'Thomas', 'Gabriel', 'Solis', 'Liam', 'Yang', 'Henry', 'Jack', 'Michael', 'Palmer', 'Summer', 'Mosley', 'Barry', 'Olivia', 'Keiko', 'Espinoza', 'Candace', 'Pickett', 'Mia', 'Caldwell', 'Thomas', 'Terry', 'Ruth', 'Joseph', 'Yasir', 'Wilder', 'Flavia', 'Anthony', 'Emma', 'Roach', 'Eric', 'Russell', 'Cheyenne', 'Olson', 'Shaine', 'Avila', 'Chantale', 'Long', 'Dane', 'Cruz', 'Regan', 'Patterson', 'Drew', 'Leo', 'Bevis', 'Miller', 'Bruce', 'Mccarty', 'Ocean', 'Blair', 'Guinevere', 'Osborn', 'Olga', 'Strong', 'Robert', 'Orr', 'Odette', 'Sears', 'Zelda', 'Medina', 'Priscilla', 'Frank', 'Ursula', 'Holmes', 'Melvin', 'Carrillo', 'Mason', 'Chavez', 'Oren', 'Fox', 'Amos', 'Barr'];
let id = 0;

const generateItem = (): any => {
    return {
        id: ++id,
    };
};

export const generateHierarchicalData = (nodesPerLevel: number, levels: number): any[] => {
    if (levels === 0) {
        return null;
    }

    return new Array(nodesPerLevel)
        .fill(null)
        .map(() => {
            const node = generateItem();

            const childNodes = generateHierarchicalData(nodesPerLevel, levels - 1);
            if (childNodes != null) {
                node.items = childNodes;
            }

            return node;
        });
};
`
}
