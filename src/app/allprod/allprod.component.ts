import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allprod.json";
@Component({
  selector: 'app-allprod',
  templateUrl: './allprod.component.html',
  styleUrls: ['./allprod.component.css']
})
export class AllprodComponent implements OnInit {

  constructor() { }
  mycolor1='red'
  mycolor2='darkorange'
  mycolor3='green'

  ngOnInit(): void {
  }
  all:any=(allprod as any).default;
}