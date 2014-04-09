describe('xx', function() {
  describe('by default', function() {
    it('returns no element on the page', function() {
      expect(xx()).to.equal('No element was found on the page');
    })
  })

  describe('given an id', function() {
    it('returns the html element with the id', function() {
      var mocha = document.getElementById('mocha');
      expect(xx('#mocha')).to.equal(mocha);
    })
  })

  describe('given a class name', function() {
    it('returns the html element with the class name', function() {
      var mocha = document.getElementsByClassName('mocha');
      expect(xx('.mocha')).to.equal(mocha);
    })
  })

  describe('given a tag name', function() {
    it('returns each html element with that tage name', function() {
      var mocha = document.getElementsByTagName('div');
      expect(xx('<div>')).to.equal(mocha);
    })
  })
})
