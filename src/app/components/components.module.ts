import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TitleoneComponent } from './titleone/titleone.component';
import { AddproductformComponent } from './addproductform/addproductform.component';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ProductlistComponent } from './productlist/productlist.component';
import { TitletwoComponent } from './titletwo/titletwo.component';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './card/card.component';
import { AnnualSalesChartComponent } from './annual-sales-chart/annual-sales-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ItemSalesChartComponent } from './item-sales-chart/item-sales-chart.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SalesByCustomersComponent } from './sales-by-customers/sales-by-customers.component';
import { SalesBySalesPersonComponent } from './sales-by-sales-person/sales-by-sales-person.component';
import { SalesByItemComponent } from './sales-by-item/sales-by-item.component';
import { RegionPiChartComponent } from './region-pi-chart/region-pi-chart.component';




@NgModule({
  declarations: [
    SidenavComponent,
    TitleoneComponent,
    AddproductformComponent,
    ProductlistComponent,
    TitletwoComponent,
    DashComponent,
    CardComponent,
    AnnualSalesChartComponent,
    ItemSalesChartComponent,
    MiniCardComponent,
    SalesReportComponent,
    SalesByCustomersComponent,
    SalesBySalesPersonComponent,
    SalesByItemComponent,
    RegionPiChartComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    NgChartsModule
  ],
  exports:[
    SidenavComponent,
    TitleoneComponent,
    AddproductformComponent,
    ProductlistComponent,
    TitletwoComponent,
    DashComponent
  ]
})
export class ComponentsModule { }
