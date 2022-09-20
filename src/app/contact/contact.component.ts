import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import * as allprod from "../data/allprod.json"
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact[]=[];
  //constructor injection of the ContactService
  constructor(private contactservice:ContactService) { }

  ngOnInit(): void {
    const contactObservable= this.contactservice.getContactDetails();
    contactObservable.subscribe((contactData: Contact[])=>{
      this.contact=contactData;
    });
  }
  all:any=(allprod as any).default;
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
}
