import { Component, OnInit } from '@angular/core';
import * as card from "../data/card.json";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  onOrder()
  {
    alert("Fill in the details!!");
  }

  ngOnInit(): void {
  }

  car:any=(card as any).default;

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
