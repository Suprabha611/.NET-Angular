import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private authService: UserService, private adminService: AdminService, private cartSvc: CartService) { }
  auth: boolean = false;
  admin:boolean =false;
  //STRING INTERPOLATION
  title = 'DREAMS';
  //PROPERTY BINDING
  public logo = "https://www.pngitem.com/pimgs/m/131-1311810_transparent-dreamcatcher-clipart-watercolor-dream-catcher-png-png.png";
  cartCount: number = 0;

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Dream Catcher
  //Event
  search_product(product_name:string):void{ //Dream Catcher
    if(product_name=='')
    {
      // this.productentered=' ';
      alert('Search Something!!');
    }
    this.productentered=product_name  ; //Dream Catcher
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
  //Admin Service
    this.adminService.adminSubject.subscribe(
      data => {
        console.log('admin inside nav component: ' + data);
        this.admin = data;
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