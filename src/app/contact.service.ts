import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  contact: Contact[] = [
    {
      
      pname: 'Samsung',
      pdescription: 'Samsung Convection Microwave Oven 28 L MC28H5025VB | SAMSUNG India',
      price: 5500,
      img: 'https://th.bing.com/th/id/OIP.fbJktvTY6j5ZEkcL6R7BZAHaEg?pid=ImgDet&rs=1'
    }
  ];


  public getContactDetails(): any {
    const contactObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contact);
      }, 1000);
    });
    return contactObservable;
  }
}
