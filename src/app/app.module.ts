import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleComponent } from './simple/simple.component';
import { LedComponent } from './led/led.component';
import { BlueComponent } from './blue/blue.component';
import { MultiComponent } from './multi/multi.component';
import { SpecialComponent } from './special/special.component';
import { LargeComponent } from './large/large.component';
import { SmallComponent } from './small/small.component';
import { MediumComponent } from './medium/medium.component';
import { GiftsComponent } from './gifts/gifts.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AllprodComponent } from './allprod/allprod.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DealsComponent } from './deals/deals.component';
import { MegadealsComponent } from './deals/megadeals/megadeals.component';
import { BasicComponent } from './basic/basic.component';
import { CarComponent } from './car/car.component';
import { SpiritualComponent } from './spiritual/spiritual.component';
import { BookComponent } from './book/book.component';
import { ChildComponent } from './child/child.component';
import { KeyComponent } from './key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    SearchComponent,
    HomeComponent,
    SimpleComponent,
    LedComponent,
    BlueComponent,
    MultiComponent,
    SpecialComponent,
    LargeComponent,
    SmallComponent,
    MediumComponent,
    GiftsComponent,
    RequestComponent,
    LoginComponent,
    ContactComponent,
    AllprodComponent,
    RegisterComponent,
    ProductdetailsComponent,
    CartItemsComponent,
    DealsComponent,
    MegadealsComponent,
    BasicComponent,
    CarComponent,
    SpiritualComponent,
    BookComponent,
    ChildComponent,
    KeyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }