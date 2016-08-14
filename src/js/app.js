var d3    = require('d3-force');
var graph = require('./data.json');

var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

simulation
    .nodes(graph.nodes)
    .on("tick", redraw);

simulation.force("link")
    .links(graph.links)
    .distance(d =>  100);

function redraw() {
  context.clearRect(0, 0, width, height);

  context.beginPath();
  graph.links.forEach(drawLink);
  context.stroke();

  context.beginPath();
  graph.nodes.forEach(drawNode);
  context.fill();
}

function drawLink(d) {
  context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);
}

function drawNode(d) {
  context.moveTo(d.x + 3, d.y);
  context.arc(d.x, d.y, 20, 0, 2 * Math.PI);
}
