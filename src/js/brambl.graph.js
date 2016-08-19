var d3        = require('d3-force');
var Renderer  = require('./brambl.renderer'); 

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
    this.renderer   = new Renderer(this);
  }

  /**
   * start the simulation
  */
  start() {
    this.simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(this.canvas.width / 2, this.canvas.height / 2));

    this.simulation
        .nodes(this.nodes)

    this.simulation.force("link")
        .links(this.edges)
        .distance(d =>  100);

    this.simulation.on("tick", () => this.renderer.redraw());
  }

  /**
   * stop the simulation
   */
  stop() {
    this.simulation.stop();
  }
}

module.exports = Graph; 
