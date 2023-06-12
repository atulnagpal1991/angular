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
import { DialogsComponent } from './common/layout/dialogs/dialogs.component';
import { DialogsModule } from "@progress/kendo-angular-dialog";
import { SplitButtonComponent } from './common/layout/split-button/split-button.component';
import { DropDownButtonComponent } from './common/layout/drop-down-button/drop-down-button.component';
import { DataGridComponent } from './common/layout/data-grid/data-grid.component';
import { ListBoxComponent } from './common/layout/list-box/list-box.component';
import { ExcelExportComponent } from './common/layout/excel-export/excel-export.component';
import { AngularChatComponent } from './common/layout/angular-chat/angular-chat.component';
import { ListViewComponent } from './common/layout/list-view/list-view.component';
import { EditorComponent } from './common/layout/editor/editor.component';
import { AngularSchedulerComponent } from './common/layout/angular-scheduler/angular-scheduler.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { ExcelExportModule } from "@progress/kendo-angular-excel-export";
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { EditorModule } from "@progress/kendo-angular-editor";
import { SchedulerModule } from "@progress/kendo-angular-scheduler";
import { ListViewModule } from "@progress/kendo-angular-listview";
import { DestinationCardComponent } from './common/layout/list-view/destination-card/destination-card.component';
import { InputComponent } from './common/layout/input/input.component';
import { SwitchComponent } from './common/layout/switch/switch.component';
import { SliderComponent } from './common/layout/slider/slider.component';
import { SelectComponent } from './common/layout/select/select.component';
import { AutocompleteComponent } from './common/layout/autocomplete/autocomplete.component';
import { BreadcrumbsComponent } from './common/layout/breadcrumbs/breadcrumbs.component';
import { TabsComponent } from './common/layout/tabs/tabs.component';
import { AlertComponent } from './common/layout/alert/alert.component';
import { AccordionComponent } from './common/layout/accordion/accordion.component';
import { ProgressComponent } from './common/layout/progress/progress.component';
import { BadgeComponent } from './common/layout/badge/badge.component';
import { ChipComponent } from './common/layout/chip/chip.component';
import { DateAndTimeComponent } from './common/layout/date-and-time/date-and-time.component';
import { CheckboxAndRadioComponent } from './common/layout/checkbox-and-radio/checkbox-and-radio.component';
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { CommonModule } from "@angular/common";
import { ProgressBarModule } from "@progress/kendo-angular-progressbar";
import { DropDownListModule } from "@progress/kendo-angular-dropdowns";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { ReactiveFormsModule } from "@angular/forms";

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
    PdfExportComponent,
    DialogsComponent,
    SplitButtonComponent,
    DropDownButtonComponent,
    DataGridComponent,
    ListBoxComponent,
    ExcelExportComponent,
    AngularChatComponent,
    ListViewComponent,
    EditorComponent,
    AngularSchedulerComponent,
    DestinationCardComponent,
    InputComponent,
    SwitchComponent,
    SliderComponent,
    SelectComponent,
    AutocompleteComponent,
    BreadcrumbsComponent,
    TabsComponent,
    AlertComponent,
    AccordionComponent,
    ProgressComponent,
    BadgeComponent,
    ChipComponent,
    DateAndTimeComponent,
    CheckboxAndRadioComponent,
  ],
  imports: [
    NavigationModule,
    ProgressBarModule,
    IndicatorsModule,
    DropDownListModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    PDFExportModule,
    DialogsModule,
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
    NotificationModule,
    GridModule,
    ListBoxModule,
    ExcelExportModule,
    ChatModule,
    EditorModule,
    SchedulerModule,
    ListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
