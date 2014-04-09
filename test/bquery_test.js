describe('xx', function() {
  describe('by default', function() {
    it('returns no element on the page', function() {
      expect(xx()).to.equal('No element was found on the page');
    })
  })

  describe('given an id', function() {
    describe('found on the page', function() {
      it('returns the html element with the id', function() {
        var mocha = document.getElementById('mocha');
        expect(xx('#mocha')).to.equal(mocha);
      })
    })

    describe('not found on the page', function() {
      it('returns null', function() {
        expect(xx('#id')).to.be.null;
      })
    })
  })

  describe('given a class name', function() {
    describe('found on the page', function() {
      it('returns the html element with the class name', function() {
        var mocha = document.getElementsByClassName('mocha');
        expect(xx('.mocha')).to.equal(mocha);
      })
    })

    describe('not found on the page', function() {
      it('returns an empty array', function() {
        expect(xx('.class')).to.have.length(0);
      })
    })
  })

  describe('given a tag name', function() {
    describe('found on the page', function() {
      it('returns each html element with that tage name', function() {
        var mocha = document.getElementsByTagName('div');
        expect(xx('<div>')).to.equal(mocha);
      })
    })

    describe('not found on the page', function() {
      it('returns an empty array', function() {
        expect(xx('<img>')).to.have.length(0);
      })
    })
  })
})
