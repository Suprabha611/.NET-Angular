import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }