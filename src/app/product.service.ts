import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Chemise' , price :150 , image: 'https://www.nodus.fr/53609-product_zoom/chemise-chevron-bleu.jpg'},
    { id: 2, name: 'Pants' , price :200 , image: 'https://th.bing.com/th/id/OIP.ZQhDuX5-lEbJGPCl3nH7iQAAAA?rs=1&pid=ImgDetMain'},
    { id: 3, name: 'Pants jean' , price :240 , image: 'https://th.bing.com/th/id/OIP.QKkMIHylVrQoKN70ihEUtgHaLH?rs=1&pid=ImgDetMain'},
    { id: 4, name: 'T-shirt' , price :180 , image: 'https://th.bing.com/th/id/R.6c3ddd4f609acc5e3fff3e13255cfc15?rik=nMtuon3w6BIpiw&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2ft473kellygreen.jpg&ehk=ngEG5J4NY4mngHySwtGScfJOpm%2bFsWS9P0TPNj15Qww%3d&risl=&pid=ImgRaw&r=0'},
    { id: 5, name: 'T-shirt' , price :50 , image: 'https://artistfirst.com.au/cdn/shop/products/MassAppealDeadHeadsTeeFront_600x600.jpg?v=1655089182'},
    { id: 6, name: 'Jacket' , price :550 , image: 'https://www.fashionbeans.com/wp-content/uploads/2022/12/axelarigato_pufferjacket.jpg'},
    { id: 7, name: 'Jacket Jeans' , price :250 , image: 'https://th.bing.com/th/id/OIP.Bag_vP6lFp-jLYQVK_WLZwAAAA?rs=1&pid=ImgDetMain'},
    { id: 8, name: 'Chosseur' , price :350 , image: 'https://th.bing.com/th/id/R.d43caea15b8643c913d021d98df9a1b3?rik=MZOHler1V24AgQ&pid=ImgRaw&r=0'},
    { id: 9, name: 'Chosseur' , price :250 , image: 'https://th.bing.com/th/id/OIP.gQb-LXgLIxhF27l7XElnQgAAAA?rs=1&pid=ImgDetMain'},
    { id: 10, name: 'Hodie' , price :190, image: 'https://d1l6fqa7jeeusv.cloudfront.net/upload/all/bRc6bCaq4wa9YTFz7qsqpkTuwJktb4N461d0omjS.jpg'},
    { id: 11, name: 'Sweat-shirt' , price :350 , image: 'https://th.bing.com/th/id/OIP.1vSZAfokwskYMfDQ_xF6KgHaHa?rs=1&pid=ImgDetMain'},
    { id: 12, name: 'Nike' , price :350 , image: 'https://content.sitesupply.co/assets/89f6eaea-ce3b-4e93-9a85-28aaad2ce43f?width=1080&height=1080'},
    { id: 13, name: 'Sandal' , price :60 , image: 'https://cf.shopee.co.id/file/319b3ed444033e9da5c790de1c3080eb'},
    { id: 14, name: 'Foulard' , price :30 , image: 'https://th.bing.com/th/id/R.eb49e1873f2295f54da5273d9f0dc146?rik=ZrEH65PNU95aNg&pid=ImgRaw&r=0'},
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
