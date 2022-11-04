//* D3 Graph *//

const PLACEHOLDER_DATA = [
    {id: "1", name: "South Africa", price: "29"},
    {id: "2", name: "Ghana", price: "10"},
    {id: "3", name: "Nigeria", price: "34"},
    {id: "4", name: "Egypt", price: "56"},
];
const PADDING = { top: 20, bottom: 20}
const WIDTH = 600;
const HEIGHT = 400 - PADDING.top - PADDING.bottom;

const chartContainer = d3.select('#G1')
.attr('width', WIDTH)
.attr('height', HEIGHT + HEIGHT + PADDING.top + PADDING.bottom)
;
const chart = chartContainer.append('g');

//Create Scales
const xScale = d3.scaleBand().rangeRound([0, WIDTH]).padding(0.1);
const yScale = d3.scaleLinear().range([HEIGHT, 0]);

//Create Domains
xScale.domain(PLACEHOLDER_DATA.map((d) => d.name));
yScale.domain([0, d3.max(PLACEHOLDER_DATA, (d) => d.price) + 1]);

//Draw Bars
chart.selectAll('.bar')
.data(PLACEHOLDER_DATA)
.enter()
.append('rect')
.classed('bar', true)
.attr('width', xScale.bandwidth())
.attr('height', data => HEIGHT - yScale(data.price))
.attr('x', data => xScale(data.name))
.attr('y', data => yScale(data.price))
;

//Draw Labels
chart.selectAll('.label')
.data(PLACEHOLDER_DATA)
.enter()
.append('text')
.text(data => data.price)
.attr('x', data => xScale(data.name) + (xScale.bandwidth()/2) )
.attr('y', data => yScale(data.price) -10)
.attr('text-anchor', 'middle')
.classed('label', true)
;

//DRAW X-AXIS
chart.append('g')
.call(d3.axisBottom(xScale).tickSizeOuter(0))
.attr('color', '#a1a1a1')
.attr('transform',`translate(0, ${HEIGHT})`)
;

// DRAW Y-AXIS
chart.append('g')
.call(d3.axisRight(yScale).tickSizeOuter(0))
.attr('color','a1a1a1')
.attr('transform', `translate(0)`)
;

//Labels
chart.append("text")
   .attr("transform", "translate(100,-32)")
   .attr("x", 50)
   .attr("y", 50)
   .attr("font-size", "24px")
   .text("Facebook users across Africa")

chart.append("g")
   .attr("transform", "translate(0," + HEIGHT + ")")
   .call(d3.axisBottom(xScale))
   .append("text")
   .attr("y", HEIGHT - 250)
   .attr("x", WIDTH - 100)
   .attr("text-anchor", "end")
   .attr("stroke", "black")
   .text("Country");

chart.append('g')
   .call(d3.axisLeft(yScale)
   .tickFormat(function(d){
       return "$" + d;
   }).ticks(10))
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("y", 100)
   .attr('x', -125)
   .attr("dy", "-5.1em")
   .attr("text-anchor", "end")
   .attr("stroke", "black")
   .text("Million users");

   //* Graph 2 *//
 

   

   