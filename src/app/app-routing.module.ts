import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { SimpleComponent } from './simple/simple.component';

//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'DREAMS',component:CardComponent,data: {
    page: 'home'}},
  {path:'simple',component:SimpleComponent},
  {path:'home',component:HomeComponent},
  {path:'pricing',component:HomeComponent},
  {path:'occasions',component:HomeComponent},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }