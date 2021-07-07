import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  title = 'Line Chart';
  chart = [];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Temperature (℃)',
            data: [30,31,32,33,33,32,31,31,31,31,30,30],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
          },
          {
            label: 'Humidity (%)',
            data: [30,27,29,50,78,84,88,86,85,90,74,46],
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
          },
        ]
      }
    })
  }


}
