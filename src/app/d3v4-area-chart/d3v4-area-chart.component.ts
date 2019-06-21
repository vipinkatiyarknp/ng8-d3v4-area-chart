import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3v4-area-chart',
  templateUrl: './d3v4-area-chart.component.html',
  styleUrls: ['./d3v4-area-chart.component.scss']
})
export class D3v4AreaChartComponent implements OnInit {

  constructor() { }
  inputChartData: any;
  inputChartConfig: any;

  @Input('d3v4AreaChartData')
  set d3v4AreaChartData(val) {
    this.inputChartData = val;
  }
  get d3v4AreaChartData() {
    return this.inputChartData;
  }


  @Input('d3v4AreaChartConfig')
  set d3v4AreaChartConfig(val) {
    this.inputChartConfig = val;
  }
  get d3v4AreaChartConfig() {
    return this.inputChartConfig;
  }


  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // parse the date / time
    const parseTime = d3.timeParse('%d-%b-%y');

    // set the ranges
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // define the area
    const area = d3.area()
      .x(d => {
        return x(d.date);
      })
      .y0(height)
      .y1(d => {
        return y(d.close);
      });

    // define the line
    const valueline = d3.line()
      .x(d => {
        return x(d.date);
      })
      .y(d => {
        return y(d.close);
      });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin

    const svg = d3.select('#chart-container').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .attr('background-color', this.inputChartConfig.svgBg)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');

    // get the data
    if (this.inputChartData) {
      const data = this.inputChartData;
      // format the data
      data.forEach(d => {
        d.date = parseTime(d.date);
        d.close = +d.close;
      });

      // scale the range of the data
      x.domain(d3.extent(data, d => {
        return d.date;
      }));
      y.domain([0, d3.max(data, d => {
        return d.close;
      })]);

      // add the area
      svg.append('path')
        .data([data])
        .attr('fill', this.inputChartConfig.areaBg)
        .attr('d', area);

      // add the valueline path.
      svg.append('path')
        .data([data])
        .attr('fill', 'none')
        .attr('stroke', this.inputChartConfig.lineColor)
        .attr('stroke-width', this.inputChartConfig.linewidth + 'px')
        .attr('d', valueline);

      const div = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

      svg.selectAll('myCircles')
        .data(data)
        .enter()
        .append('circle')
        .attr('fill', this.inputChartConfig.dotBg)
        .attr('stroke', this.inputChartConfig.dotColor)
        .attr('cx', d => {
          return x(d.date);
        })
        .attr('cy', d => {
          return y(d.close);
        })
        .attr('r', 6).on('mouseover', d => {
          div.transition()
            .duration(200)
            .style('opacity', .9);
          div.html(parseTime(d.date) + '<br/>' + d.close)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY - 28) + 'px');
        })
        .on('mouseout', d => {
          div.transition()
            .duration(500)
            .style('opacity', 0);
        });

      // add the X Axis
      svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

      // add the Y Axis
      svg.append('g')
        .call(d3.axisLeft(y));
    }
  }

}
