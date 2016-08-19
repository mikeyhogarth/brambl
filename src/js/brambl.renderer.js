class Renderer {
  constructor(graph) {
    this.graph    = graph;
    this.context  = graph.canvas.getContext("2d");
  }

  redraw() {
    this.context.clearRect(0, 0, this.graph.canvas.width, this.graph.canvas.height);

    this.context.beginPath();
    this.graph.edges.forEach((d) => this.drawLink(d));
    this.context.stroke();

    this.context.beginPath();
    this.graph.nodes.forEach((d) => this.drawNode(d));
    this.context.fill();
  }

  drawLink(d) {
    this.context.moveTo(d.source.x, d.source.y);
    this.context.lineTo(d.target.x, d.target.y);
  }

  drawNode(d) {
    this.context.moveTo(d.x + 3, d.y);
    this.context.arc(d.x, d.y, 20, 0, 2 * Math.PI);
  }

  
}

module.exports = Renderer;
