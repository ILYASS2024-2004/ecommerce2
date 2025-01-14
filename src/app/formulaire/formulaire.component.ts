import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit {
  cart : any[] =[];
    constructor(private productService: ProductService){}
    ngOnInit() {
      this.cart = this.productService.getCart();
  
    }

    getTotal(){
      return this.cart.reduce((sum,item)=> sum + item.price ,0);
    }

    fixedText: string = '+212'; // Texte fixe
 inputnum: string = this.fixedText; // Initialisation de l'input avec le texte fixe
  
    onch(): void {
      // Si l'utilisateur modifie la partie fixe, la restaurer
      if (!this.inputnum.startsWith(this.fixedText)) {
        this.inputnum = this.fixedText;
      }
    }
}
