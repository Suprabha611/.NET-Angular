import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor( private http:HttpClient) { }
  postProducts(data:any){
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getProductDetails(){
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }

  updateProducts(data:any, pid:number){
    return this.http.put<any>("http://localhost:3000/posts"+pid, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProducts(pid:number){
    return this.http.delete<any>("http://localhost:3000/posts"+pid).pipe(map((res:any)=>{
      return res;
    }))
  }
}
