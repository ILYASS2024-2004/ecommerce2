import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  constructor(private produ:ProductService){}
  title = 'ecommerce-app';
  display: boolean = false; // Variable locale
  ngOnInit() {
    // Synchronise la variable locale avec la valeur du service
    this.produ.display$.subscribe((value) => {
      this.display = value;
    });
  }

toggleDisplay(){
  this.produ.toggleDisplay();

  
}

getd(){
  return this.produ.toggleDisplay();
}
  
}
