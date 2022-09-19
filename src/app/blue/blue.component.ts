import { Component, OnInit } from '@angular/core';
import * as blue from "../data/blue.json";

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

  constructor() { }
  mycolor1='red'
  mycolor2='darkorange'
  mycolor3='green'

  ngOnInit(): void {
  }
  onOrder()
  {
    alert("Fill in the details!!");
  }

  blue:any=(blue as any).default;

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
