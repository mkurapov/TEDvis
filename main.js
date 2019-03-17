
const svg = d3.select("svg"),
margin = {top: 20, right: 20, bottom: 30, left: 100},
width = +svg.attr("width") - margin.left - margin.right,
height = +svg.attr("height") - margin.top - margin.bottom;
// join the data array to the circle elements. This includes the 
// three existing circles 

let data = [50, 100, 150, 200];
const circles = svg.selectAll('circle').data(data);


// circles.attr('class', 'red');
circles
    .enter() // get missing placeholder elements
    .append('circle') // add dom elements
    .attr('r', 20) // update selection
    .merge(circles)
    .attr('class', 'red')
    .attr('cy', 50)
    .attr('cx', d => d)
    


// // // circles.exit() // get references to extra elements
// // //         .remove()

// // //         console.log(circles);

// const colors = d3.scaleOrdinal(d3.schemeAccent);
// d3.select("body").append("svg:svg")
//     .attr("width", 300)
//     .attr("height", 150)
//     .selectAll("g")
//     .data([[1, 1, 1, 1], [0.2, 0.2, 0.2, 0.2, 1.5, 1.7]])
//     .enter().append("svg:g")
//     .attr("transform", (d,i) => {
//         return "translate("+(75+(i)*150)+",75)";
//     })
//     .selectAll("path")
//     .data(d => {
//         console.log(d);
//         return d3.pie()(d);
//     })
//     .enter().append("svg:path")
//     .attr("d", d3.arc().innerRadius(0).outerRadius(70))
//     .attr("fill", (d,i) => {
//         console.log(d);
//         return colors(i);
//     });
    