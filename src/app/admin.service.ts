import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public adminSubject = new Subject<boolean>();
  validateAdmin(data:boolean) {
    this.adminSubject.next(data);
  }
  hosturl=environment.adminapi;
  value?:boolean;
    getAdminStatus(){
    this.adminSubject.subscribe(
      data => 
      {
        console.log('inside admin service: ' + data);
        this.value= data;
        console.log('inside admin service 11: ' + this.value);
      }
    );
    return this.value;
  }
  constructor() { }
}
