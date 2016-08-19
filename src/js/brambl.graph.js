var d3    = require('d3-force');

class Graph {

  /* Create an instance of a brambl 
   *
   */
  constructor(selector, data = {}, options = {}) {
    this.selector   = selector;
    this.options    = options;
    this.nodes      = data.nodes || [];
    this.edges      = data.edges || [];
    this.canvas     = document.querySelector(selector);
    this.simulation = null; 
  }

  // Lots of horrible side effects in here at the moment - this is just
  // because the code here is largely a copy/paste job from a d3 example
  // and this whole thing is basically just in "bootstrapping mode" at the 
  // moment while I get the env set up the way I want it. 
  //
  // Don't judge me!!
  //
  start() {
    var context    = this.canvas.getContext("2d");
    this.simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(this.canvas.width / 2, this.canvas.height / 2));

    this.simulation
        .nodes(this.nodes)
        .on("tick", redraw.bind(this));

    this.simulation.force("link")
        .links(this.edges)
        .distance(d =>  100);

    function redraw() {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      context.beginPath();
      this.edges.forEach(drawLink);
      context.stroke();

      context.beginPath();
      this.nodes.forEach(drawNode);
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

module.exports = Graph; 
