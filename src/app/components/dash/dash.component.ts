import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  items = ['Sales Report', 'Sales by Item', 'Sales by Customer', 'Sales By Sales Person'];
  expandedIndex = 0;
  filterDetailsForm!: FormGroup;
  files: File[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterDetailsForm = this.fb.group({
      category:[''],
      startDate:[null],
      endDate:[null],
      customerName:[],
      salesPersonName:[],
      itemName:[],
      region:[]
    }); 
  }
  /** Based on the screen size, switch from standard to one column per row */

  
}
