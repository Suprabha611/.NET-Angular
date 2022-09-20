import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { SimpleComponent } from './simple/simple.component';
import { LedComponent } from './led/led.component';
import { ContentComponent } from './content/content.component';
import { BlueComponent } from './blue/blue.component';
import { MultiComponent } from './multi/multi.component';
import { SmallComponent } from './small/small.component';
import { MediumComponent } from './medium/medium.component';
import { LargeComponent } from './large/large.component';
import { SpecialComponent } from './special/special.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RequestComponent } from './request/request.component';
import { ContactComponent } from './contact/contact.component';

//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'',component:LoginComponent},
  {path:'DREAMS',component:CardComponent},
  {path:'simple',component:SimpleComponent},
  {path:'led', component:LedComponent},
  {path:'blue', component:BlueComponent},
  {path:'multi', component:MultiComponent},
  {path:'small', component:SmallComponent},
  {path:'medium', component:MediumComponent},
  {path:'large', component: LargeComponent},
  {path:'special', component:SpecialComponent},
  {path:'gifts', component:GiftsComponent},
  {path:'request', component:RequestComponent},
  {path:'prod_details', component:ProductdetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path: 'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }