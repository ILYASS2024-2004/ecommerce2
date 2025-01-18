import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit  {
  cart : any[] =[];
  display:boolean=false;
 
  constructor(private productService: ProductService){}
  ngOnInit() {
    this.cart = this.productService.getCart();
    scroll(
      {
           top:0,
           left:0,
          
      }
  

     
    )
    
      // Synchronise la variable locale avec la valeur du service
      this.productService.display$.subscribe((value) => {
        this.display = value;})
   

   
    

  } 
  
  
   
   isVisible1: boolean=false;
   showch1(){
     this.isVisible1=true;
     setTimeout(()=>{
       this.isVisible1=false;
     },600)}
    
  removeFromCart(product:any){

    var audior:any=document.getElementById("rmo");
    audior.currentTime=0;

    audior.play();
 
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
