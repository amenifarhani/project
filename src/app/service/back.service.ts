import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class BackService {
productURL:string=environment.lien+"/products"
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>(this.productURL)
  }
  addProduct(p:Product){
    return this.http.post(this.productURL,p)
  }
  deleteProduct(id:number){
    return this.http.delete(this.productURL+"/"+id)

  }
  updateProduct(p:Product){
    return this.http.put(this.productURL+"/"+p.id,p) }
}
