import { Component, OnInit } from '@angular/core';
import * as simple from "../data/simple.json";

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor() { }

  onOrder()
  {
    alert("Fill in the details!!");
  }

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
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
}