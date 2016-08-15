describe('Giraph', function() {
  var giraph;

  describe('constructor', function() {
    it('can be constructed', function() {
      giraph = new Giraph();
      expect(giraph).to.be.instanceOf(Giraph);
    });
  });

});
