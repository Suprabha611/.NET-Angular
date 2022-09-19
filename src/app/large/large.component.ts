import { Component, OnInit } from '@angular/core';
import * as large from "../data/large.json";

@Component({
  selector: 'app-large',
  templateUrl: './large.component.html',
  styleUrls: ['./large.component.css']
})
export class LargeComponent implements OnInit {

  constructor() { }
  mycolor='red'

  ngOnInit(): void {
  }
  large:any=(large as any).default;
  
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
