import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalservicesService {
  public productDetails:Array<any>=[]
  constructor() { }

  addProduct(item:any){
    this.productDetails=[...this.productDetails,item]
  }

  updateProduct(item:any){
    let prodcuts=this.productDetails.map((p:any)=>{
      if(p.id===item.id){
        p=item
      }
      return p
    });
    this.productDetails=prodcuts
  }
}
