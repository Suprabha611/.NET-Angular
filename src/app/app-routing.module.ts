import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose

import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { SimpleComponent } from './simple/simple.component';
import { LedComponent } from './led/led.component';
import { ContentComponent } from './content/content.component';
import { BlueComponent } from './blue/blue.component';
import { MultiComponent } from './multi/multi.component';

//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'DREAMS',component:CardComponent},
  {path:'simple',component:SimpleComponent},
  {path:'led', component:LedComponent},
  {path:'blue', component:BlueComponent},
  {path:'multi', component:MultiComponent},
  {path:'home',component:HomeComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }