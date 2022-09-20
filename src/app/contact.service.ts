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
      "address":"Mangalore",
      "email": "info@dreams.com"
    },
    {
      "address":"Bangalore",
      "email": "info@dreams.com"
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
