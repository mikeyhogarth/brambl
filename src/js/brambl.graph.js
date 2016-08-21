var d3          = require('d3-force');
var renderNode  = require('./renderers/brambl.node.renderer'); 
var renderEdge  = require('./renderers/brambl.edge.renderer'); 

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
    this.context    = this.canvas.getContext("2d");
  }

  /**
  * start the simulation
  */
  start() {
    this.simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(this.canvas.width / 2, this.canvas.height / 2));

    this.addNodes(this.nodes);
    this.addEdges(this.edges);

    this.simulation.on("tick", () => this.render());
  }

  addNode(node) {
    this.nodes.push(node);
    this.addNodes(this.nodes);
  }

  /**
   * add Nodes
   */
  addNodes(nodes) {
    this.simulation.nodes(this.nodes);
  }

  /**
   * add Edge
   */ 
   addEdge(edge) {
    this.edges.push(edge);
    this.addEdges(this.edges);
  }

  /**
   * add Edges
   */ 
  addEdges(edges) {
    this.simulation.force("link")
      .links(this.edges)
      .distance(d =>  100);
    
    this.simulation.restart();
  }

  /**
  * stop the simulation
  */
  stop() {
    this.simulation.stop();
  }


  /**
  * render a frame 
  */  
  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.beginPath();
    this.edges.forEach((d) => renderEdge(d, this.context));
    this.context.stroke();

    this.context.beginPath();
    this.nodes.forEach((d) => renderNode(d, this.context));
    this.context.fill();
  }
}

module.exports = Graph; 
