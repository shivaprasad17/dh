import { Component, OnInit, AfterViewInit, ViewChild, Input, SimpleChanges,OnChanges} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ProductlistComponent implements OnInit {

  @Input() productDetails:any;
  @Input() bankTypeList:any;
  @Input() paymentFileFormatList:any;
  @Input() subsidiaryList:any;
  displayedColumns: string[] = ['images','name','type','status','final_selling_price','edit','remove','expand'];
  dataSource = new MatTableDataSource([]);
  expandedElement: any | null;

  

  constructor(private _liveAnnouncer: LiveAnnouncer,private router:Router,private sanitizer: DomSanitizer) {}

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log(this.productDetails)
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if(changes && changes['productDetails'] && changes['productDetails'].currentValue){
      this.dataSource.data=changes['productDetails'].currentValue
    }
    console.log(this.productDetails)
    // else if(changes && changes['bankDetails'] && changes['bankTypeList'] && changes['paymentFileFormatList'] && changes['subsidiaryList'] && changes['bankDetails'].currentValue && changes['bankTypeList'].currentValue && changes['paymentFileFormatList'].currentValue&& changes['subsidiaryList'].currentValue){
    //  console.log("change",changes)
    // }
  }

  bankTypeRefName(bankTypeId:string){
   return this.bankTypeList && this.bankTypeList.filter((bankType:any)=>bankType.id===bankTypeId)[0].name
  }
  paymentFileFormatName(pffId:string){
    return this.paymentFileFormatList && this.paymentFileFormatList.length && this.paymentFileFormatList.filter((pff:any)=>pff.id===pffId).length && this.paymentFileFormatList.filter((pff:any)=>pff.id===pffId)[0].name ? this.paymentFileFormatList.filter((pff:any)=>pff.id===pffId)[0].name :''
  }
  subsidiaryRefName(subsidiaryId:string){
    return this.subsidiaryList && this.subsidiaryList.length && this.subsidiaryList.filter((sub:any)=>sub.id===subsidiaryId).length && this.subsidiaryList.filter((sub:any)=>sub.id===subsidiaryId)[0].name ? this.subsidiaryList.filter((sub:any)=>sub.id===subsidiaryId)[0].name:''
  }
  

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
  }

  navEditItem(id:number){
    this.router.navigate(['editproduct',id])
  }

  navViewItem(id:number){
    this.router.navigate(['bank/view',id])
  }

  deleteItem(id:string){
  //   const dialogRef = this.dialog.open(ErrorDialog, {
  //     data: {details:[{
  //       detail:"Are you sure you want to delete this item ?"
  //     }],dialogHeader:'Delete',dialogHeaderColor:'red',isCancel:true,display:'block'},
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result === true ){
  //       let recordType='customrecord_2663_entity_bank_details'
  //       this.bankdetailsService.deleteBankDetailsById(recordType,id).subscribe((res:any)=>{
  //         if(res && res.status && res.status===204){
  //           this.dataSource.data=this.dataSource.data.filter((data:any)=>data.id!=id)
  //         }else{
  //           const dialogRef = this.dialog.open(ErrorDialog, {
  //             data: {details:res["o:errorDetails"],dialogHeader:'Error occurred',dialogHeaderColor:'red',display:'block'},
  //           });
  //           dialogRef.afterClosed().subscribe(result => {
  //             this.router.navigate(['/bank/list'])
  //           });
  //         }
  //       })
  //     }
  //   });
 
 }

 getImg(f:File){
  let url=''
  var reader = new FileReader();
  reader.onload=(event:any)=>{
    url=event.target.result
    return url
  }
  reader.readAsDataURL(f)
  return url
 }
}
