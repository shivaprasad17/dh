import { Component, OnInit } from '@angular/core';
import { GlobalservicesService } from 'src/app/provider/globalservices.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  productDetails:any
  constructor(private globalservicesService:GlobalservicesService) { }

  ngOnInit(): void {
    console.log(this.globalservicesService.productDetails)
    this.productDetails=this.globalservicesService.productDetails
    this.productDetails=this.productDetails.map((p:any)=>{
      let imageUrl:any=[]
      p.files.map((f:File)=>{
        var reader = new FileReader();
        reader.onload=(event:any)=>{
          imageUrl.push(event.target.result)
         // imageUrl=[...imageUrl,event.target.result]
        }
        reader.readAsDataURL(f)
      })
      p.imageUrls=imageUrl
      return p
    })

  }

}
