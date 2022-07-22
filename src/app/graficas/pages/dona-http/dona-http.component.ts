import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 22]
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
  constructor(private gs: GraficasService) { }

  ngOnInit(): void {
    this.gs.getUsuariosRRSS()
      .subscribe(data => {
        const labels = Object.keys(data);
        const values = Object.values(data);

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values)

      })
  }

}
