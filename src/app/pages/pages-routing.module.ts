import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  {
    path:'items',
    component:ItemsComponent
  },
  {
    path:'sales-order',
    component:SalesorderComponent
  },
  {
    path:'add-product',
    component:AddproductComponent
  },
  {path:'editproduct/:id',component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
