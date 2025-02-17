import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path : 'products',component:ProductsComponent},
  {path : 'cart',component:CartComponent},
  {path : 'formulaire',component:FormulaireComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
