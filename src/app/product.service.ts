import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {  name: 'Chemise' , price :150 , image: 'https://www.nodus.fr/53609-product_zoom/chemise-chevron-bleu.jpg'},
    {  name: 'Chemise' , price :170 , image: 'https://th.bing.com/th/id/R.eace49725779b008983777dd94ec3461?rik=4o%2b0LBBn%2ffFtxA&pid=ImgRaw&r=0'},
    {  name: 'Chemise' , price :120 , image: 'https://th.bing.com/th/id/OIP.RLG3g9chVAX8uixom7OlRQHaJj?rs=1&pid=ImgDetMain'},
    {  name: 'Chemise' , price :130 , image: 'https://www.pyjama-orangerie.com/1323-thickbox_default/chemise-de-nuit-fille-bernadette-blanc.jpg'},
    { id: 2, name: 'Pants' , price :220 , image: 'https://image.made-in-china.com/2f0j00KtUkDQEsqzqb/OEM-ODM-Non-Stretch-Quality-Straight-Fit-with-Patch-Pocket-on-Front-and-Side-High-Waisted-off-White-New-Fashion-Lady-Jeans.jpg'},

    { id: 2, name: 'Pants' , price :200 , image: 'https://th.bing.com/th/id/OIP.ZQhDuX5-lEbJGPCl3nH7iQAAAA?rs=1&pid=ImgDetMain'},
    { id: 2, name: 'Pants' , price :300 , image: 'https://i.pinimg.com/originals/0a/75/d4/0a75d4079f753337b1134c340362f7ac.jpg'},

    { id: 3, name: 'Pants' , price :240 , image: 'https://th.bing.com/th/id/OIP.QKkMIHylVrQoKN70ihEUtgHaLH?rs=1&pid=ImgDetMain'},
    { id: 4, name: 'T-shirt' , price :180 , image: 'https://th.bing.com/th/id/R.6c3ddd4f609acc5e3fff3e13255cfc15?rik=nMtuon3w6BIpiw&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2ft473kellygreen.jpg&ehk=ngEG5J4NY4mngHySwtGScfJOpm%2bFsWS9P0TPNj15Qww%3d&risl=&pid=ImgRaw&r=0'},
    { id: 5, name: 'T-shirt' , price :50 , image: 'https://artistfirst.com.au/cdn/shop/products/MassAppealDeadHeadsTeeFront_600x600.jpg?v=1655089182'},
    { id: 5, name: 'T-shirt' , price :150 , image: 'https://th.bing.com/th/id/OIP.5XTM2YvfxcKZ889J0ENi-wHaLH?rs=1&pid=ImgDetMain'},

    { id: 5, name: 'T-shirt' , price :50 , image: 'https://th.bing.com/th/id/OIP.YQV_az6sSDpnICHKr-dorAAAAA?rs=1&pid=ImgDetMain'},
    
    { id: 6, name: 'Jacket' , price :550 , image: 'https://www.fashionbeans.com/wp-content/uploads/2022/12/axelarigato_pufferjacket.jpg'},
    { id: 6, name: 'Jacket' , price :350 , image: 'https://th.bing.com/th/id/OIP.EwxY1W9q8IkUYzC7D2k0ZwHaHY?rs=1&pid=ImgDetMain'},

    { id: 6, name: 'Jacket' , price :400 , image: 'https://image1.superdry.com/static/images/optimised/zoom/upload9223368955666104448.jpg'},
    { id: 7, name: 'Jacket' , price :250 , image: 'https://th.bing.com/th/id/OIP.Bag_vP6lFp-jLYQVK_WLZwAAAA?rs=1&pid=ImgDetMain'},
   
    { id: 10, name: 'Sweat-shirt' , price :190, image: 'https://d1l6fqa7jeeusv.cloudfront.net/upload/all/bRc6bCaq4wa9YTFz7qsqpkTuwJktb4N461d0omjS.jpg'},
    { id: 11, name: 'Sweat-shirt' , price :350 , image: 'https://th.bing.com/th/id/OIP.1vSZAfokwskYMfDQ_xF6KgHaHa?rs=1&pid=ImgDetMain'},
    { id: 13, name: 'Sweat-shirt' , price :160 , image: 'https://th.bing.com/th/id/R.2a479f8908637adbc80167f394a31e08?rik=bttPW2STSg2yuA&pid=ImgRaw&r=0'},
    { id: 14, name: 'Sweat-shirt' , price :80 , image: 'https://www.alphabroder.com/media/hires/9103_51_z.jpg'},
        { id: 12, name: 'Chausseur' , price :475 , image: 'https://content.sitesupply.co/assets/89f6eaea-ce3b-4e93-9a85-28aaad2ce43f?width=1080&height=1080'},
{ id: 8, name: 'Chausseur' , price :350 , image: 'https://th.bing.com/th/id/R.d43caea15b8643c913d021d98df9a1b3?rik=MZOHler1V24AgQ&pid=ImgRaw&r=0'},
    { id: 9, name: 'Chausseur' , price :250 , image: 'https://th.bing.com/th/id/OIP.gQb-LXgLIxhF27l7XElnQgAAAA?rs=1&pid=ImgDetMain'},
    { id: 15, name: 'Chausseur' , price :450 , image: 'https://www.commeuncamion.com/content/uploads/2014/02/chaussures-classe-brogues-septieme-largeur.jpg'},
  ];
  cart : any = [];
  getProducts() {
    return this.products;
  }
  getCart() {
    return this.cart;
  }
  addTocart(product:any){
    this.cart.push(product);
  }
  removeFormCart(product : any){
    const i =this.cart.indexOf(product);
    if(i > -1){
      this.cart.splice(i,1);
    }
  }
 

  constructor() { }
}
