import { Component, OnInit } from '@angular/core';
import * as led from "../data/led.json";

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mycolor='red'

  onOrder()
  {
    alert("Fill in the details!!");
  }
  led:any=(led as any).default;

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
