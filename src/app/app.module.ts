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
import { TooltipComponent } from './common/layout/tooltip/tooltip.component';
import { TooltipsModule } from "@progress/kendo-angular-tooltip";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { PopoverComponent } from './common/layout/popover/popover.component';
import { NotificationComponent } from './common/layout/notification/notification.component';
import { NotificationModule } from "@progress/kendo-angular-notification";
import { PaginationComponent } from './common/layout/pagination/pagination.component';
import { PagerModule } from "@progress/kendo-angular-pager";
import { StepperComponent } from './common/layout/stepper/stepper.component';
import { PdfExportComponent } from './common/layout/pdf-export/pdf-export.component';
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";
import { IntlModule } from "@progress/kendo-angular-intl";
import { NumericTextBoxModule } from "@progress/kendo-angular-inputs";
import { IconsModule } from "@progress/kendo-angular-icons";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    ButtonsComponent,
    DragDropComponent,
    FilteringComponent,
    LoadMoreComponent,
    TreeListComponent,
    TooltipComponent,
    PopoverComponent,
    NotificationComponent,
    PaginationComponent,
    StepperComponent,
    PdfExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    PDFExportModule,
    DropDownsModule,
    IntlModule,
    NumericTextBoxModule,
    LayoutModule,
    PagerModule,
    BrowserAnimationsModule,
    ButtonsModule,
    UtilsModule,
    TreeViewModule,
    LabelModule,
    InputsModule,
    FormsModule,
    TreeListModule,
    TooltipsModule,
    DateInputsModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
