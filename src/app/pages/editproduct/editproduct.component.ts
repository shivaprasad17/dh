import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalservicesService } from 'src/app/provider/globalservices.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  productDetailsForm!: FormGroup;
  files: File[] = [];
  paramsId=0
  constructor(private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalservicesService) { }

  ngOnInit(): void {
    this.productDetailsForm = this.fb.group({
      name: ['', Validators.required],
      sku: [''],
      category: ['', Validators.compose([Validators.required])],
      inActive: [false],
      returnableItem: [false],
      units: ['kg'],
      measurement: [''],
      productDescription: ['', Validators.required],
      notes: [''],
      sellingPrice: [null, Validators.required],
      isDiscount: [false],
      discountPercentage: [0],
      sellingPriceAfterDiscount: [''],
      region:['']
    });
    this.activatedRoute.params.subscribe((params: any) => {
      if (params && params.id) {
        this.paramsId=params.id
        let productDetails = this.globalService.productDetails.filter(p => p.id === +params.id)
        if (productDetails && productDetails.length) {
          this.productDetailsForm.patchValue({
            name: productDetails[0].name,
            sku: productDetails[0].sku,
            category: productDetails[0].category,
            inActive: productDetails[0].inActive,
            returnableItem: productDetails[0].returnableItem,
            units: productDetails[0].units,
            measurement: productDetails[0].measurement,
            productDescription: productDetails[0].productDescription,
            notes: productDetails[0].notes,
            sellingPrice: productDetails[0].sellingPrice,
            isDiscount: productDetails[0].isDiscount,
            discountPercentage: productDetails[0].discountPercentage,
            sellingPriceAfterDiscount: productDetails[0].sellingPriceAfterDiscount,
            region:productDetails[0].region
          })
          this.files=productDetails[0].files
          //console.log(this.productDetailsForm.value)
        }
      }
    })

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
  editProductDetails(){

    this.globalService.updateProduct({...this.productDetailsForm.value,files:this.files,id:this.paramsId})
    this.router.navigate(['/items'])
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
