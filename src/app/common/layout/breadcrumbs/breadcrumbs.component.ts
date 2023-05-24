import { Component } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { BreadCrumbItem } from "@progress/kendo-angular-navigation";


const defaultItems: BreadCrumbItem[] = [
  {
    text: "Home",
    title: "Home",
    icon: "home",
  },
  {
    text: "Products",
    title: "Products",
  },
  {
    text: "Computer peripherals",
    title: "Computer peripherals",
  },
  {
    text: "Keyboards",
    title: "Keyboards",
  },
  {
    text: "Breadcrumbs",
    title: "Breadcrumbs",
  },
];


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})



export class BreadcrumbsComponent {
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }

  
  public items: BreadCrumbItem[] = [...defaultItems];

  public onItemClick(item: BreadCrumbItem): void {
    const index = this.items.findIndex((e) => e.text === item.text);
    this.items = this.items.slice(0, index + 1);
  }

  public refreshBreadCrumb(): void {
    this.items = [...defaultItems];
  }


}
