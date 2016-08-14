var Giraph = require('../../src/js/giraph');
var expect = require('chai').expect;

describe('Giraph', () => {
  var gigraph;

  describe('constructor', function() {
    it('can be constructed', function() {
      giraph = new Giraph();
      expect(giraph).to.be.instanceOf(Giraph);
    });
  });

});
