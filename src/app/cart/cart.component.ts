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
  adplr(){
    var audior:any=document.getElementById("rmo");
    audior.play();
   }
   isVisible1: boolean=false;
   showch1(){
     this.isVisible1=true;
     setTimeout(()=>{
       this.isVisible1=false;
     },600)}
    
  removeFormCart(product:any){
    this.adplr()
    this.productService.removeFormCart(product);
    this.showch1();
  }
  getTotal(){
    return this.cart.reduce((sum,item)=> sum + item.price ,0);
  }


}
