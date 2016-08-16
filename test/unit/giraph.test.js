describe('Giraph', function() {

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin', '<div id="container"></div>');
  });
  
  afterEach(function() {
    document.body.removeChild(document.getElementById('container'));  
  });

  describe('constructor', function() {
    beforeEach(function() { giraph = new Giraph('#container') });

    it('instantiates the object', function() {
      expect(giraph).to.be.instanceOf(Giraph);
    });

    it('sets the .selector property to the passed in selector', function() {
      expect(giraph.selector).to.equal('#container');
    });

    it('sets the .container property to be the found container', function() {
      expect(giraph.container.id).to.equal('container');
    });

    it('creates a canvas element within the specified container', function() {
      expect(document.querySelector('#container canvas')).to.not.be.null;
    });

  });

});
