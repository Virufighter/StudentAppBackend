import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SearchPatientComponent } from './search-patient/search-patient.component'
const myrout:Routes=[{
  path:"",
  component:AddPatientComponent
},{
  path:"view",
  component:ViewPatientComponent
},{
  path:"search",
  component:SearchPatientComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPatientComponent,
    ViewPatientComponent,
    SearchPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myrout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
