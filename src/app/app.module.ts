import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableInBootstrapComponent } from './table-in-bootstrap/table-in-bootstrap.component';
import { TableNameComponent } from './table-name/table-name.component';
import { TableDateComponent } from './table-date/table-date.component';
import { TableStatusComponent } from './table-status/table-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TableInBootstrapComponent,
    TableNameComponent,
    TableDateComponent,
    TableStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
