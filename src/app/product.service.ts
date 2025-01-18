import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {  name: 'Chemise homme xl xxl' , price :150 , image: 'https://i.pinimg.com/736x/e9/31/34/e931343c6bc6706560602d4a177df83b.jpg'},
    {  name: 'Chemise femme m..xxl' , price :170 , image: 'https://www.stylewe.com/image/catalog/product/2022-11-25/df0ab4d752d564ed478b85631ec444a2.png'},
    {  name: 'Chemise enfants s' , price :120 , image: 'https://th.bing.com/th/id/OIP.RLG3g9chVAX8uixom7OlRQHaJj?rs=1&pid=ImgDetMain'},
    {  name: 'Chemise enfants s&l' , price :130 , image: 'https://www.pyjama-orangerie.com/1323-thickbox_default/chemise-de-nuit-fille-bernadette-blanc.jpg'},
    { id: 2, name: 'Pantalon Sport' , price :220 , image: 'https://i.pinimg.com/originals/d4/17/f8/d417f82a50d6e061903d279113461cf0.jpg'},

    { id: 2, name: 'Pantalon Class s...xxl' , price :200 , image: 'https://c.imgz.jp/966/76947966/76947966b_b_80_500.jpg'},
    { id: 2, name: 'Pantalon Jeans m...xl' , price :300 , image: 'https://static.mercdn.net/item/detail/orig/photos/m88631829999_1.jpg?1667490880'},

    { id: 3, name: 'Pantalon Bagy xxl' , price :240 , image: 'https://i.pinimg.com/originals/ac/77/19/ac7719ee85aa01a755bcbee6f285d91a.jpg'},
    { id: 4, name: 'T-shirt Over s...xl' , price :110 , image: 'https://i.etsystatic.com/23975747/r/il/a3c9d8/5543935637/il_1080xN.5543935637_mql2.jpg'},
    { id: 5, name: 'T-shirt Ventage S&M' , price :120 , image: 'https://i.etsystatic.com/45569174/r/il/5bf9e9/5310021233/il_1080xN.5310021233_coiz.jpg'},
    { id: 5, name: 'T-shirt L' , price :150 , image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/279071030-161152579634502-4881142862949582330-n-1653564190.jpg'},

    { id: 5, name: 'T-shirt Over s...xl' , price :170 , image: 'https://tse3.mm.bing.net/th?id=OIP.od4-FN5QEfQCyoFVqWrCiwAAAA&rs=1&pid=ImgDetMain'},
    
    { id: 6, name: 'Jacket cuire L & XL' , price :550 , image: 'https://cdn.shopify.com/s/files/1/1090/7042/products/Pu-Chaqueta-Cuero-Vintage-Streetwear-Hip-Hop-Punk-Gothic-PU-Leather-Jackets-Cool-Outerwear-Men-New_2fe343f8-ac98-43ba-9ca2-a89b949dfed5.jpg?v=1582178140'},
    { id: 6, name: 'Jacket L & XL' , price :350 , image: 'https://item-shopping.c.yimg.jp/i/n/koko777_mlyhoutjk109'},

    { id: 6, name: 'Jacket M...XL' , price :400 , image: 'https://image1.superdry.com/static/images/optimised/zoom/upload9223368955666104448.jpg'},
    { id: 7, name: 'Jacket  L...XXL' , price :250 , image: 'https://image.made-in-china.com/2f0j00uqcoisNhyVkw/High-Quality-Jean-Jacket-Custom-Streetwear-Denim-Jacket-for-Men-Jeans-Jacket.webp'},
   
    { id: 10, name: 'Sweat-shirt l' , price :190, image: 'https://ae01.alicdn.com/kf/HTB1rHklIuOSBuNjy0Fdq6zDnVXaC/Privathinker-Men-Clothing-2018-Mens-Stripe-Streetwear-Hoodies-Cotton-Male-Hiphop-Korean-Oversized-Sweatshirt-Plus-Size.jpg'},
    { id: 11, name: 'Sweat-shirt m&l' , price :170 , image: 'https://th.bing.com/th/id/R.37360deaafcaee3af2a33efd9a9a05d2?rik=Si1FrJ%2fGsmG7MQ&pid=ImgRaw&r=0'},
    { id: 13, name: 'Sweat-shirt s..xl' , price :160 , image: 'https://i.etsystatic.com/34394702/r/il/c275f9/5704332500/il_1080xN.5704332500_eypy.jpg'},
    { id: 14, name: 'Sweat-shirt s..xxl' , price :180 , image: 'https://www.orezoria.com/wp-content/uploads/2024/02/Fire-Flame-Graphic-Y2K-Knitted-Sweater-Unisex-4.jpg'},
        { id: 12, name: 'Chausseur Nike 37...44' , price :475 , image: 'https://down-th.img.susercontent.com/file/sg-11134201-7rcdc-lssjvq451awrcc'},
{ id: 8, name: 'Chausseur 29...42' , price :350 , image: 'https://tse3.mm.bing.net/th?id=OIP.0BHfO1YvKZPns7lOjJUS_QHaE9&rs=1&pid=ImgDetMain'},
    { id: 9, name: 'Chausseur 30...45' , price :250 , image: 'https://www.commeuncamion.com/content/uploads/2020/07/lanvin-sneakers.jpg'},
    { id: 15, name: 'Chausseur Class 42...47' , price :450 , image: 'https://www.commeuncamion.com/content/uploads/2014/02/chaussures-classe-brogues-septieme-largeur.jpg'},
  ];
  cart : any = [];
  getProducts() {
    return this.products;
  }
  getCart() {
    return this.cart;
  }
 
  // addTocart(product:any){
  //   this.cart.push(product);
  
  // }
  
  // removeFormCart(product : any){
  //   const i =this.cart.indexOf(product);
  //   if(i > -1){
  //     this.cart.splice(i,1);
     
  //   }
  // }
  i:number=0;
  addToCart(product: any) {
    this.i++;
    // Vérifiez si le produit existe déjà dans le panier
    const existingProduct = this.cart.find((item:any) => item.name === product.name);
    if (existingProduct) {
      // Si le produit existe, augmentez la quantité
      existingProduct.quantity++;
    } else {
      // Sinon, ajoutez le produit avec une quantité initiale de 1
      this.cart.push({ ...product, quantity: 1 });
      
    }
  }

  removeFromCart(product: any) {
    this.i--;
    // Retirez le produit du panier ou diminuez la quantité
    const index = this.cart.findIndex((item:any) => item.name === product.name);
    if (index !== -1) {
      this.cart[index].quantity--;
      if (this.cart[index].quantity === 0) {
        this.cart.splice(index, 1);
      }
    }
  }






  private displaySource = new BehaviorSubject<boolean>(false); // Valeur initiale : false
  display$ = this.displaySource.asObservable();

  setDisplay(value: boolean) {
    this.displaySource.next(value);
  }

  toggleDisplay() {
    this.displaySource.next(!this.displaySource.value);
  }
 

  constructor() { }
}
