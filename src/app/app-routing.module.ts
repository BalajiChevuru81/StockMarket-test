import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './sign-up/adminsignup/adminsignup.component';
import { UserdetailsComponent } from './login/userdetails/userdetails.component';
import { AdmindetailsComponent } from './login/admindetails/admindetails.component';
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



const routes: Routes = [
  {path:"LogIn",component:LoginComponent},
  {path:"SignUp",component:SignUpComponent},
  {path:"Admin",component:AdminloginComponent},
  {path:"Signup",component:AdminsignupComponent},
  {path:"userdetails",component:UserdetailsComponent},
  {path:"admindetails",component:AdmindetailsComponent},
  {path:"importdata",component:ImportdataComponent},
  {path:"managecompany",component:ManagecompanyComponent},
  {path:"manageexchange",component:ManageexchangeComponent},
  {path:"updateipodetails",component:UpdateipodetailsComponent},
  {path:"ipos",component:IposComponent},
  {path:"comparecompany",component:ComparecompanyComponent},
  {path:"comparesector",component:ComparesectorComponent},
  {path:"others",component:OthersComponent},
  {path:"addcompany",component:AddcompanyComponent},
  {path:"addstockexchange",component:AddstockexchangeComponent},
  {path:"addipodetails", component:AddipodetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 
