import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-donutchart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  private data = [
    {  "amount": "10"},
    {  "amount": "20"},
    {  "amount": "30"},
    {  "amount": "40"},
  ];
  private svg;
  private margin = 30;
  private width = 300;
  private height = 300;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.amount.toString()))
      .range(["#D3D3D3", "#BEBEBE", "#B0B0B0", "#909090"]);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.amount));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(60)
        .outerRadius(this.radius)
      )
      .attr('fill', (d, i) => (this.colors(i)));

  }

}
