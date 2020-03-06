import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import {AdminsignupComponent } from './sign-up/adminsignup/adminsignup.component';
import { UserdetailsComponent } from './login/userdetails/userdetails.component';
import { AdmindetailsComponent } from './login/admindetails/admindetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImportdataComponent } from './login/admindetails/importdata/importdata.component';
import { ManagecompanyComponent } from './login/admindetails/managecompany/managecompany.component';
import { ManageexchangeComponent } from './login/admindetails/manageexchange/manageexchange.component';
import { UpdateipodetailsComponent } from './login/admindetails/updateipodetails/updateipodetails.component';
import { IposComponent } from './login/userdetails/ipos/ipos.component';
import { ComparecompanyComponent } from './login/userdetails/comparecompany/comparecompany.component';
import { ComparesectorComponent } from './login/userdetails/comparesector/comparesector.component';
import { OthersComponent } from './login/userdetails/others/others.component';
import { AddcompanyComponent } from './login/admindetails/managecompany/addcompany/addcompany.component';
import { AddstockexchangeComponent } from './login/admindetails/manageexchange/addstockexchange/addstockexchange.component';
import { AddipodetailsComponent } from './login/admindetails/updateipodetails/addipodetails/addipodetails.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminloginComponent,
    AdminsignupComponent,
    UserdetailsComponent,
    AdmindetailsComponent,
    ImportdataComponent,
    ManagecompanyComponent,
    ManageexchangeComponent,
    UpdateipodetailsComponent,
    IposComponent,
    ComparecompanyComponent,
    ComparesectorComponent,
    OthersComponent,
    AddcompanyComponent,
    AddstockexchangeComponent,
    AddipodetailsComponent,
    
   
   
    
    
  ],
  imports: [
   

    BrowserModule,

  FormsModule,

  ReactiveFormsModule,

  HttpClientModule,

  AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
