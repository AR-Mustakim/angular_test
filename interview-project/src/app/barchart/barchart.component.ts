import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-barchart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private data = [
    { "id": "1", "Stars": "25"},
    { "id": "2", "Stars": "50"},
    { "id": "3", "Stars": "45"},
    { "id": "4", "Stars": "20"},
    { "id": "5", "Stars": "30"},
    { "id": "6", "Stars": "10"},
    { "id": "7", "Stars": "50"},
  ];
  private svg;
  private margin = 50;
  private width = 500 - (this.margin * 1);
  private height = 300 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("style", "align-self: center")
      .attr("width", this.width + (this.margin * 4))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.id))
      .padding(0.45);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + this.height + ")")
      .attr("style","color:909090")
      .call(d3.axisBottom(x).tickValues([]));

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 50])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .attr("style", "color:909090")
      .call(d3.axisLeft(y).tickValues([]));


    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(d.id))
      .attr("y", d => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this.height - y(d.Stars))
      .attr("fill", "#909090");
  }
}
