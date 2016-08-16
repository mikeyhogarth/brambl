describe('Brambl', function() {
    
  var brambl;

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin', '<div id="container"></div>');
  });
  
  afterEach(function() {
    document.body.removeChild(document.getElementById('container'));  
  });

  describe('constructor', function() {

    beforeEach(function() { brambl = new Brambl('#container') });

    it('instantiates the object', function() {
      expect(brambl).to.be.instanceOf(Brambl);
    });

    it('sets the .selector property to the passed in selector', function() {
      expect(brambl.selector).to.equal('#container');
    });

    it('sets the .container property to be the found container', function() {
      expect(brambl.container.id).to.equal('container');
    });

    it('creates a canvas element within the specified container', function() {
      expect(document.querySelector('#container canvas')).to.not.be.null;
    });

  });

});
