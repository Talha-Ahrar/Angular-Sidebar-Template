import { Component, ViewChild } from '@angular/core';
import { FoodService } from '../services/services';
import { Chart, registerables } from 'node_modules/chart.js';
import { ChartComponent } from 'ng-apexcharts';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartpageComponent {
  chartdata: any;

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  todayList: any[] = [];
  res: any;
  constructor(private foodService: FoodService) {}

  Renderchart(
    labeldata: any,
    maindata: any,

    type: any,
    id: any
  ) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: '# of Votes',
            data: maindata,
            backgroundColor:'rgba(255, 99, 132, 0.2), ' ,
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  ngOnInit(): void {
    this.todayList = this.foodService.gettodayitem();
    this.res = this.foodService.calculateMacroNutrientPercentage(
      this.todayList
    );

    this.chartdata = this.res;

    if (this.chartdata != null) {
      for (let i = 0; i < this.chartdata.length; i++) {
        //console.log(this.chartdata[i]);
        this.labeldata.push(this.chartdata[i].name);
        this.realdata.push(
          this.chartdata[i].fatPercentage,
          this.chartdata[i].carbohydratePercentage,
          this.chartdata[i].proteinPercentage
        );

      }
    }

    this.Renderchart(this.labeldata, this.realdata, 'pie', 'piechart');
  }
}
