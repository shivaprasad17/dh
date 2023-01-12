import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalservicesService } from 'src/app/provider/globalservices.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productDetailsForm!: FormGroup;
  files: File[] = [];
  constructor(private fb: FormBuilder,private router:Router , private globalservicesService:GlobalservicesService) { }

  ngOnInit(): void {
    this.productDetailsForm = this.fb.group({
      name: ['', Validators.required],
      sku:[''],
      category:['',Validators.compose([Validators.required])],
      inActive:[false],
      returnableItem:[false],
      units:['kg'],
      measurement:[''],
      productDescription:['',Validators.required],
      notes:[''],
      sellingPrice:[null,Validators.required],
      isDiscount:[false],
      discountPercentage:[0],
      sellingPriceAfterDiscount:[''],
      region:['Andhra Pradesh']
    }); 
  }

  onSelect(event:any) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  onClickCancel(){
    this.router.navigate(['/items'])
  }
  submitProductDetails(){
    this.router.navigate(['/items'])
    this.globalservicesService.addProduct({...this.productDetailsForm.value,files:this.files,id:Date.now()})
  }

  onChangeDiscount(event:any){
    let afterDiscount = this.productDetailsForm.value['sellingPrice']-((this.productDetailsForm.value['sellingPrice']*this.productDetailsForm.value['discountPercentage'])/100);
    this.productDetailsForm.controls['sellingPriceAfterDiscount'].setValue(afterDiscount)
  }

  calculateDiscount(event:any){
    let discount = ((this.productDetailsForm.value['sellingPrice']-this.productDetailsForm.value['sellingPriceAfterDiscount'])/this.productDetailsForm.value['sellingPrice'])*100
    this.productDetailsForm.controls['discountPercentage'].setValue(discount)
  }

}
