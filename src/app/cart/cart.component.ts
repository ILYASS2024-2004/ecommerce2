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
    
  removeFromCart(product:any){
    this.adplr()
    this.productService.removeFromCart(product);
    this.showch1();
  }
  // getTotal(){
  //   removeFromCart(product: any) {
  //     this.productService.removeFromCart(product);
  //     // Met à jour la liste du panier après suppression
  //     this.cart = this.productService.getCart();
  //   }
  
    getTotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    }
  


}
