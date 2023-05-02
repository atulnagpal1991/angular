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
  import { Component } from '@angular/core';
import { generateHierarchicalData } from './data-generator';

@Component({
    selector: 'my-app',
    template:"
        <kendo-treeview
            [nodes]="nodes"
            textField="text"
            kendoTreeViewExpandable
            kendoTreeViewHierarchyBinding
            childrenField="items"
            kendoTreeViewLoadMore
            [pageSize]="10"
        >
        </kendo-treeview>
    "
})
export class AppComponent {
    // 500 root nodes, each with 500 child nodes => 250 000 in total
    public nodes: any[] = generateHierarchicalData(500, 2);
}
`


code1 = `
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, BrowserAnimationsModule, TreeViewModule, FormsModule]
})
export class AppModule { }
`

code2 = `
const names = ['Daryl', 'Sweeney', 'Guy', 'Wooten', 'Buffy', 'Weber', 'Hyacinth', 'Hood', 'Akeem', 'Carr', 'Rinah', 'Simon', 'Gage', 'Daniels', 'Constance', 'Vazquez', 'Darrel', 'Solis', 'Brian', 'Yang', 'Lillian', 'Bradshaw', 'Christian', 'Palmer', 'Summer', 'Mosley', 'Barry', 'Ayers', 'Keiko', 'Espinoza', 'Candace', 'Pickett', 'Mia', 'Caldwell', 'Thomas', 'Terry', 'Ruth', 'Downs', 'Yasir', 'Wilder', 'Flavia', 'Short', 'Aaron', 'Roach', 'Eric', 'Russell', 'Cheyenne', 'Olson', 'Shaine', 'Avila', 'Chantale', 'Long', 'Dane', 'Cruz', 'Regan', 'Patterson', 'Drew', 'Mckay', 'Bevis', 'Miller', 'Bruce', 'Mccarty', 'Ocean', 'Blair', 'Guinevere', 'Osborn', 'Olga', 'Strong', 'Robert', 'Orr', 'Odette', 'Sears', 'Zelda', 'Medina', 'Priscilla', 'Frank', 'Ursula', 'Holmes', 'Melvin', 'Carrillo', 'Martha', 'Chavez', 'Oren', 'Fox', 'Amos', 'Barr'];
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
