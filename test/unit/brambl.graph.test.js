describe('Brambl.Graph', function() {
    
  var graph;

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin', '<div id="container"></div>');
    graph = new Brambl.Graph('#container');
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

    it('sets the .container property to be the found container', function() {
      expect(graph.container.id).to.equal('container');
    });

    it('does not alter the container', function() {
      expect(document.querySelector('#container').innerHTML).to.be.empty;
    });

  });

  describe('#start', function() {
    beforeEach(function() { graph.start() });

    it('creates a canvas element within the specified container', function() {
      expect(document.querySelector('#container canvas')).to.not.be.null;
    });
  });

});
