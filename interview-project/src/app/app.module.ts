import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BarchartComponent } from './barchart/barchart.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { DonutchartComponent } from './donutchart/donutchart.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BarchartComponent,
    TableComponent,
    DonutchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
