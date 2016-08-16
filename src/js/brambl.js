var d3    = require('d3-force');
var graph = require('./data.json');

class Brambl {

  /* Create an instance of a brambl 
   *
   */
  constructor(selector, options) {
    this.selector  = selector;
    this.options   = options || {};
    this.container = document.querySelector(selector);
    this.initialize();
  }

  // Lots of horrible side effects in here at the moment - this is just
  // because the code here is largely a copy/paste job from a d3 example
  // and this whole thing is basically just in "bootstrapping mode" at the 
  // moment while I get the env set up the way I want it. 
  //
  // Don't judge me!!
  //
  initialize() {

    var canvas = document.createElement('canvas');
    container.appendChild(canvas);

    var context = canvas.getContext("2d");

    var width = canvas.width = 1000;
    var height = canvas.height = 500;

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

  }
  
}

module.exports = Brambl; 
