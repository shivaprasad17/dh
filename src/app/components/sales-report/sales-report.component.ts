import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  customerName:string;
  salesPersonName:string;
  amount:number;
  noOfItems:number
  salesNo:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',customerName:'Ravi',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:12},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',customerName:'Manish',salesPersonName:'Dinesh',amount:98,noOfItems:8,salesNo:22},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',customerName:'Ravi',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:32},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',customerName:'Prasad',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:42},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',customerName:'Prasad',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',customerName:'Ketan',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',customerName:'Manish',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',customerName:'Prasad',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',customerName:'Ketan',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',customerName:'Ravi',salesPersonName:'Dinesh',amount:98,noOfItems:8,salesNo:52},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na',customerName:'Ketan',salesPersonName:'Dinesh',amount:98,noOfItems:8,salesNo:52},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg',customerName:'Manish',salesPersonName:'Dinesh',amount:98,noOfItems:8,salesNo:52},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al',customerName:'Ketan',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si',customerName:'Prasad',salesPersonName:'Dinesh',amount:98,noOfItems:8,salesNo:52},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P',customerName:'Kumar',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S',customerName:'Ravi',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl',customerName:'Manish',salesPersonName:'Dinesh',amount:98,noOfItems:8,salesNo:52},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar',customerName:'Ketan',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K',customerName:'Manish',salesPersonName:'Dinesh',amount:98,noOfItems:8,salesNo:52},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca',customerName:'Kumar',salesPersonName:'Shiva',amount:98,noOfItems:8,salesNo:52},
];

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  miniCardData!: any[];
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
  displayedColumns: string[] = ['position', 'salesNo','customerName','salesPersonName','amount','noOfItems','weight'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;



  

  constructor(private breakpointObserver: BreakpointObserver) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.miniCardData=[
    {
      title:'Total no of Items',
      value:32,
      percentValue:2,
      isCurrency:false,
      isIncrease:true,
      icon:'all_inbox',
      color:'accent',
      duration:'since last month'

    },
    {
      title:'Sales',
      value:2120,
      percentValue:2,
      isCurrency:false,
      isIncrease:true,
      icon:'assessment',
      color:'warn',
      duration:'since last month'

    },
    {
      title:'Total no of Customers',
      value:150,
      percentValue:2,
      isCurrency:false,
      isIncrease:true,
      icon:'groups_2',
      color:'primary',
      duration:'since last month'

    },
    {
      title:'Total no of Sales Person',
      value:21,
      percentValue:2,
      isCurrency:false ,
      isIncrease:true,
      icon:'emoji_people',
      color:'primary',
      duration:'since last month'

    }]
      
  }
}
