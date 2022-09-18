import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private route: ActivatedRoute) { }
  
  prod:products=new products();

  ngOnInit() { 
    const homeData = this.route.snapshot.data['home'];
  }
}
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}
