import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-region-pi-chart',
  templateUrl: './region-pi-chart.component.html',
  styleUrls: ['./region-pi-chart.component.css']
})
export class RegionPiChartComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ 'Andhra Pradesh' , 'Telangana', 'Karnataka' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() { }

  ngOnInit(): void {
  }

}
