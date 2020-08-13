import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as combinedData from '../../../assets/json/combinedCollege.json';

@Component({
  selector: 'app-line-college',
  templateUrl: './line-college.component.html',
  styleUrls: ['./line-college.component.scss']
})
export class LineCollegeComponent implements OnInit {

  @Input() level: string;
  @Input() lineChoice: string;
  @Input() majorCode: number;
  @Input() majorName: string;

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Caucasian', fill: false },
    { data: [], label: 'Asian American', fill: false },
    { data: [], label: 'African American', fill: false },
    { data: [], label: 'Hispanic', fill: false },
    { data: [], label: 'Native American', fill: false },
    { data: [], label: 'Hawaiian/ Pacific Isl', fill: false },
    { data: [], label: 'Multiracial', fill: false },
    { data: [], label: 'International', fill: false },
    { data: [], label: 'Unknown', fill: false },
  ];


  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#4e79a7',
    },
    {
      borderColor: '#f28e2c',
    },
    {
      borderColor: '#e15759',
    },
    {
      borderColor: '#76b7b2',
    },
    {
      borderColor: '#59a14f',
    },
    {
      borderColor: '#edc949',
    },
    {
      borderColor: '#af7aa1',
    },
    {
      borderColor: '#ff9da7',
    },
    {
      borderColor: '#9c755f',
    },
    {
      borderColor: '#bab0ab',
    },
  ];
  lineChartLabels = [];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }

  ngOnChanges() {
    this.initLineGraph();
  }

  ngOnInit() {
    for (let i = 2004; i <= 2019; ++i) {
      this.lineChartLabels.push(i);
    }
    this.initLineGraph();
  }

  initLineGraph(): void {
    let labels = ['Caucasian', 'Asian American', 'African American', 'Hispanic', 'Native American', 'Hawaiian/ Pacific Isl', 'Multiracial', 'International', 'Unknown'];
    if (this.level === 'undergrad') {
      for (let i = 0; i < labels.length; ++i) {
        this.lineChartData[i]['data'] = combinedData['default'][this.lineChoice]['undergradTotal'][this.majorCode][i]['data'];
      }
    } else if (this.level === 'masters') {
      for (let i = 0; i < labels.length; ++i) {
        this.lineChartData[i]['data'] = combinedData['default'][this.lineChoice]['mastersTotal'][this.majorCode][i]['data'];
      }
    } else if (this.level === 'doctorate') {
      for (let i = 0; i < labels.length; ++i) {
        this.lineChartData[i]['data'] = combinedData['default'][this.lineChoice]['doctorateTotal'][this.majorCode][i]['data'];
      }
    } else {
      for (let i = 0; i < labels.length; ++i) {
        this.lineChartData[i]['data'] = combinedData['default'][this.lineChoice]['nondegreeTotal'][this.majorCode][i]['data'];
      }
    }
  }

}
