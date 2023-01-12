import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-item-sales-chart',
  templateUrl: './item-sales-chart.component.html',
  styleUrls: ['./item-sales-chart.component.css']
})
export class ItemSalesChartComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Sales' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'No of Units' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
