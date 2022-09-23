import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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

  updateProducts(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/posts"+'/'+ id, data).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProducts(id:number){
    return this.http.delete<any>("http://localhost:3000/posts"+'/'+ id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
