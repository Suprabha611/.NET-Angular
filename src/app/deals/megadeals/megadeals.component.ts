import { Component, OnInit } from '@angular/core';
import * as deals from "../deals.json";

@Component({
  selector: 'app-megadeals',
  templateUrl: './megadeals.component.html',
  styleUrls: ['./megadeals.component.css']
})
export class MegadealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deals:any=(deals as any).default;
}
