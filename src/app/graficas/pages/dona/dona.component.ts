import { Component } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 22]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0F60FD',
        '#0E8EE3',
        '#1CDEFA',
        '#0EE3C5',
        '#0FFD98'
      ]
    }
  ]

}
