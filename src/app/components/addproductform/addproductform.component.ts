import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-addproductform',
  templateUrl: './addproductform.component.html',
  styleUrls: ['./addproductform.component.css']
})
export class AddproductformComponent implements OnInit {

  @Input()
  productdetails!: FormGroup;
  @Input() productTypeList!:any;
  @Input() files!:File[];
  @Output() onChangeInputField = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();
  @Output() onChangeDiscount = new EventEmitter<any>();
  @Output() calculateDiscount = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeInput(e:any){
  this.onChangeInputField.emit(e);
  }



// onSelect(event:any) {

//   this.files.push(...event.addedFiles);
// }

onRemoveFile(event:any) {
  this.onRemove.emit(event);
  //this.files.splice(this.files.indexOf(event), 1);
}

}
