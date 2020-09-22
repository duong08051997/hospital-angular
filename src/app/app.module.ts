import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BedsComponent } from './components/beds/beds.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MasterComponent } from './layouts/master/master.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BedsComponent,
    RoomsComponent,
    PatientsComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    BedsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
