import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private route: ActivatedRoute) { }

   //TWO-WAY BINDING
   name="Dreams"

  ngOnInit() { 
    const homeData = this.route.snapshot.data['home'];
  }

}