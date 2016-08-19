describe('Brambl.Graph', function() {
    
  var graph;

  var exampleData = {
    "nodes": [{id: "A"}, {id: "B"}],
    "edges": [{source: "A", "target": "B"}]
  };

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin', '<canvas id="container"></canvas>');
    graph = new Brambl.Graph('#container', exampleData);
  });
  
  afterEach(function() {
    document.body.removeChild(document.getElementById('container'));  
  });

  describe('constructor', function() {

    it('instantiates the object', function() {
      expect(graph).to.be.instanceOf(Brambl.Graph);
    });

    it('sets the .selector property to the passed in selector', function() {
      expect(graph.selector).to.equal('#container');
    });

    it('sets the .canvas property to be the found canvas', function() {
      expect(graph.canvas.id).to.equal('container');
    });

    it('sets the .nodes property to be the nodes property of the passed in data', function() {
      expect(graph.nodes).to.equal(exampleData.nodes);
    });

    it('sets the .edges property to be the edges property of the passed in data', function() {
      expect(graph.edges).to.equal(exampleData.edges);
    });

    it('does not alter the container', function() {
      expect(document.querySelector('#container').innerHTML).to.be.empty;
    });
  });

});
