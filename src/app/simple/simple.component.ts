import { Component, Input, OnInit } from '@angular/core';
import * as simple from "../data/simple.json";
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
    constructor(private cartsvc:CartService) { }
    //Add to cart
    cart:Cartitem={
      id:0,
      pname:'',
      pdescription:'',
      price:0,
      img:'',
      quantity:1,
      totalPrice:1    
    }
    quantity:number=1;
  
    addToCart(product:any){
      this.cart.pname=product.pname;
      this.cart.pdescription=product.pdescription;
      this.cart.price=product.price;
      this.cart.img=product.img;
      this.cart.price=product.price;
      this.cart.totalPrice=product.totalPrice;
      this.cart.quantity=this.quantity;
      this.cart.id=product.id;
      this.cartsvc.addToCart(this.cart);
      console.log(product.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'success',
        title: 'Item added successfully!!'
      })
      this.cartsvc.getCount();
    }
    //Input Class Decorator
    @Input()product:any
  
  
    mycolor='green'
  
    ngOnInit(): void {
    }
  simp:any=(simple as any).default;

  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from > to < and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-sharp fa-solid fa-angle-down';
    }
    else{
      content='fa-sharp fa-solid fa-angle-up';
    }
    return content;
  }
}