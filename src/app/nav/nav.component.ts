import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor( private authService:UserService) { }
  auth:boolean=false;
  //STRING INTERPOLATION
  title = 'DREAMS';
  //PROPERTY BINDING
  public logo="https://img.freepik.com/premium-vector/dream-indian-catcher_118813-1238.jpg?w=2000.jpg";

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Dream Catcher

  //Event
  search_product(product_name:string):void{ //Dream Catcher
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Dream Catcher
    console.log(product_name)
  }
    //Auth Service
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
  }
}