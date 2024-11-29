import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';

const routes: Routes = [
  {path:'list', component:ListProductsComponent},
  {path:'create', component:CreateProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
