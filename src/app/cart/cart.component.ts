import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {
  cart : any[] =[];
  constructor(private productService: ProductService){}
  ngOnInit() {
    this.cart = this.productService.getCart();

  }
  removeFormCart(product:any){
    this.productService.removeFormCart(product);
  }
  getTotal(){
    return this.cart.reduce((sum,item)=> sum + item.price ,0);
  }


}
