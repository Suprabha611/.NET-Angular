import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService: UserService, private cartSvc: CartService) { }
  auth: boolean = false;
  //STRING INTERPOLATION
  title = 'DREAMS';
  //PROPERTY BINDING
  public logo = "https://img.freepik.com/premium-vector/dream-indian-catcher_118813-1238.jpg?w=2000.jpg";
  cartCount: number = 0;

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Dream Catcher
  //Event
  search_product(product_name:string):void{ //Laptop
    if(product_name=='')
    {
      // this.productentered=' ';
      alert('search something');
    }
    this.productentered=product_name  ; //Laptop
    console.log(product_name)
  }
  //Auth Service
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    //Cart count
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cartCount = response.length;
        console.log(this.cartCount);
      }
    )
    this.cartSvc.countSubject.subscribe(
      (response) => {
        this.cartCount = response;
        console.log(this.cartCount);
      }
    )
  }
}