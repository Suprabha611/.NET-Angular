import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor() { }
  //STRING INTERPOLATION
  title = 'Dreams';
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
  ngOnInit(): void {
  }
}