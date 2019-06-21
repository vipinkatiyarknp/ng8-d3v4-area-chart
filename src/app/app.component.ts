import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  d3v4AreaChartConfig = {
    svgBg: '#F5F5F5',
    dotBg: '#333',
    dotColor: '#333',
    lineColor: '#000',
    linewidth: '1',
    areaBg: '#CAFACC',
    showTooltip: true,
    tooltipBg: '#FFF',
    tooltipColor: '#666'
  };
  d3v4AreaChartData = [
    {
      date: '1-May-12',
      close: 58.13
    },
    {
      date: '30-Apr-12',
      close: 10.98
    },
    {
      date: '27-Apr-12',
      close: 67
    },
    {
      date: '26-Apr-12',
      close: 15.7
    },
    {
      date: '25-Apr-12',
      close: 99
    },
    {
      date: '24-Apr-12',
      close: 30.28
    },
    {
      date: '23-Apr-12',
      close: 66.7
    },
    {
      date: '20-Apr-12',
      close: 134.98
    },
    {
      date: '19-Apr-12',
      close: 45.44
    },
    {
      date: '18-Apr-12',
      close: 143.34
    },
    {
      date: '17-Apr-12',
      close: 543.7
    },
    {
      date: '16-Apr-12',
      close: 580.13
    },
    {
      date: '13-Apr-12',
      close: 605.23
    },
    {
      date: '12-Apr-12',
      close: 622.77
    },
    {
      date: '11-Apr-12',
      close: 626.2
    },
    {
      date: '10-Apr-12',
      close: 228.44
    },
    {
      date: '9-Apr-12',
      close: 136.23
    },
    {
      date: '5-Apr-12',
      close: 233.68
    },
    {
      date: '4-Apr-12',
      close: 624.31
    },
    {
      date: '3-Apr-12',
      close: 129.32
    },
    {
      date: '2-Apr-12',
      close: 218.63
    },
    {
      date: '30-Mar-12',
      close: 199.55
    },
    {
      date: '29-Mar-12',
      close: 609.86
    },
    {
      date: '28-Mar-12',
      close: 417.62
    },
    {
      date: '27-Mar-12',
      close: 614.48
    },
    {
      date: '26-Mar-12',
      close: 406.98
    }
  ];
}
