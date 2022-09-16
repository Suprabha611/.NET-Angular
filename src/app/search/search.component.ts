//To access @Input, we need to include Input 
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //property - _productname
  _productname:any | undefined;

  //To pass information between components we have @Input and @Output

  @Input('product') //Dreams
  //write
  set pname(pname:any) //Dreams
  {
    this._productname=pname || 'Enter the Product';
    console.log(pname)
  }
  //read
  get pname():string
  {
    return this._productname;
  }
}