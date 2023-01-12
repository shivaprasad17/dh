import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ItemsComponent } from './items/items.component';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { MaterialExampleModule } from '../material.module';
import { ComponentsModule } from '../components/components.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';


@NgModule({
  declarations: [
    ItemsComponent,
    SalesorderComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialExampleModule,
    ComponentsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
