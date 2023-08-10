import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import {ProductService} from "../services/product.service";
import { BackService } from '../service/back.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string = "welcome to products page"
  products: Product[] = []
search:string=''
  constructor(private  pService: ProductService,private back:BackService) {}



  ngOnInit(): void {

   // this.products = this.pService.products;
   this.back.getProducts().subscribe((d)=>this.products=d)

  }
  BuyProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products[i].quantity--
      }}}
      deleteProduct(id:number){
        this.back.deleteProduct(id).subscribe((data)=>console.log(data))
      }
    
 


  likeproduct(yyy: number) {

   this.products.map((x)=>x.id==yyy && x.like++)




  }
  searchProduct(){
    this.products=this.products.filter((product)=>product.title.match(this.search))  }
}
