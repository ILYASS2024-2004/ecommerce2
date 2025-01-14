import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService ,public di :AppComponent) {}
  chan(){

    var up1:any = document.getElementById('up');
    var crt:any = document.getElementById('crt');
    if(scrollY==0 ){
       up1.style.display='none';
            crt.style.display='none';
    }
    window.onscroll= function() {
        if(scrollY >= 500){
            up1.style.display='block';
            crt.style.display='block';
            
        }
        else{
            up1.style.display='none';
            crt.style.display='none';
            
        }
    }
    // up1.onclick= function(){
    
    //     scroll(
    //         {
    //             top:0,
    //             left:0,
    //             behavior:"smooth"
    //         }
    
    //     )
    // }
    up1.addEventListener('click',
        function m(){
              scroll(
                {
                     top:0,
                     left:0,
                     behavior:"smooth"
                }
               
              )
        }
      
    
    )
  }
  ch(){
    const text:any = "ILYASS_SHOP";
      const  h1Element:any = document.getElementById("ilyass-shop");
       var index:any = 0;
  
      function writeText() {
        h1Element.textContent += text[index];
        index++;
  
        // Recommence si tout est écrit
        if (index === text.length) {
          index = 0; // Réinitialise l'index pour un effet infini
          setTimeout(() => {
            h1Element.textContent = ""
            h1Element.innerHTML = `<br>`
            // Efface le texte avant de recommencer
          }, 100); // Pause avant de recommencer
        }
      }
  
      setInterval(writeText, 500);
  
  }

    display: boolean = false; // Variable locale
  ngOnInit() {
    this.products = this.productService.getProducts();
    this.chan();
    this.ch();
    

  
      // Synchronise la variable locale avec la valeur du service
      this.productService.display$.subscribe((value) => {
        this.display = value;
      });
    
  
  

  }
  isVisible: boolean=false;
  showch(){
    this.isVisible=true;
    setTimeout(()=>{
      this.isVisible=false;
    },600)

  }

  
pant=false;
 chemis=false;
 disp=true;
 tsh=false;
 sho=false;
 swt=false;
 jck=false;


 i=0;
 
 adpl(){
  var audio:any=document.getElementById("aud");
  audio.play();
 }
 imagee= 'https://shop.rnli.org/cdn/shop/files/rnli-finisterre-fisherman-beanie-ecru-navy-rs2342112env-29583843426400_x1400.jpg?v=1696330665'
  addToCart(product: any) {
    this.productService.addToCart(product);
   this.i++;
    this.adpl();
   this.showch();
  
   

  }
 
}

