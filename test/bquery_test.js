describe('xx', function() {
  describe('by default', function() {
    it('returns an empty object', function() {
      expect(xx()).to.have.length(0);
    })
  })

  describe('given an id', function() {
    describe('found on the page', function() {
      it('returns the html element with the id', function() {
        expect(xx('#find-me')).to.have.length(1);
      })

      it('contains the html in elem', function() {
        expect(xx('#find-me').elem[0]).to.equal("<div id=\"find-me\"></div>");
      })
    })

    describe('not found on the page', function() {
      it('returns an empty object', function() {
        expect(xx('#missing-id')).to.have.length(0);
      })

      xit('returns a bQuery object', function() {
        expect(xx('#missing-id')).to.be.an.instanceOf(bQuery);
      })
    })
  })

  describe('given a class name', function() {
    describe('found on the page', function() {
      it('returns an array with two objects', function() {
        expect(xx('.find-me')).to.have.length(2)
      })

      it('returns an html element in the array', function() {
        expect(xx('.find-me')[0].outerHTML).to.equal("<div class=\"find-me\"></div>");
      })
    })

    describe('not found on the page', function() {
      it('returns an empty object', function() {
        expect(xx('.missing-class')).to.be.empty;
      })
    })
  })

  describe('given a tag name', function() {
    describe('found on the page', function() {
      it('an array with three div objects', function() {
        expect(xx('div')).to.have.length(4);
      })

      it('returns each html element with that tag name', function() {
        expect(xx('div')[2].outerHTML).to.equal("<div id=\"find-me\"></div>");
      })
    })

    describe('not found on the page', function() {
      it('returns an empty object', function() {
        expect(xx('img')).to.be.empty;
      })
    })
  })
})
