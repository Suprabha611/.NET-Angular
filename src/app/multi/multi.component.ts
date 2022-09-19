import { Component, OnInit } from '@angular/core';
import * as multi from "../data/multi.json";


@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {

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

  multi:any=(multi as any).default;

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
