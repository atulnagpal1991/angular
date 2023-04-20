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



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    ButtonsComponent,
    DragDropComponent,
    FilteringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
