import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './common/layout/layout.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ButtonsComponent } from './common/layout/buttons/buttons.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DragDropComponent } from './common/layout/drag-drop/drag-drop.component';
import { FilteringComponent } from './common/layout/filtering/filtering.component';
import { LoadMoreComponent } from './common/layout/load-more/load-more.component';
import { UtilsModule } from "@progress/kendo-angular-utils";
import { TreeViewModule } from "@progress/kendo-angular-treeview";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FormsModule } from "@angular/forms";
import { TreeListComponent } from './common/layout/tree-list/tree-list.component';
import { TreeListModule } from "@progress/kendo-angular-treelist";



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    ButtonsComponent,
    DragDropComponent,
    FilteringComponent,
    LoadMoreComponent,
    TreeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    ButtonsModule,
    UtilsModule,
    TreeViewModule,
    LabelModule,
    InputsModule,
    FormsModule,
    TreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
