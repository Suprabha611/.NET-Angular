import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor( private http:HttpClient) { }
  postProducts(data:any){
    return this.http.post<any>("", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductDetails(){
    return this.http.get<any>("").pipe(map((res:any)=>{
      return res;
    }))
  }

  updateProducts(data:any, id:number){
    return this.http.put<any>(""+id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProducts(id:number){
    return this.http.delete<any>(""+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
