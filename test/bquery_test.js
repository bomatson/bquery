describe('xx', function() {
  describe('by default', function() {
    it('returns an empty object', function() {
      expect(xx()).to.have.length(0);
    })

    it('has a document context', function() {
      expect(xx().context).to.equal(document)
    })
  })

  describe('given an id', function() {
    describe('found on the page', function() {
      it('returns the html element with the id', function() {
        expect(xx('#find-me')).to.have.length(1);
      })

      it('contains the html in elem', function() {
        expect(xx('#find-me')[0].outerHTML).to.equal("<div id=\"find-me\">Find me</div>");
      })
    })

    describe('not found on the page', function() {
      it('returns an empty object', function() {
        expect(xx('#missing-id')).to.have.length(0);
      })

      it('still has a selector property', function() {
        expect(xx('#missing-id').selector).to.equal('#missing-id');
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
      it('has a length of 0', function() {
        expect(xx('.missing-class')).to.have.length(0);
      })

      it('still has a selector property', function() {
        expect(xx('.missing-class').selector).to.equal('.missing-class');
      })
    })
  })

  describe('given a tag name', function() {
    describe('found on the page', function() {
      it('an array with four div objects', function() {
        expect(xx('div')).to.have.length(4);
      })

      it('returns each html element with that tag name', function() {
        expect(xx('div')[3].outerHTML).to.equal("<div id=\"find-me\"></div>");
      })
    })

    describe('not found on the page', function() {
      it('has a length of 0', function() {
        expect(xx('img')).to.have.length(0);
      })
    })
  })

  describe('click handler', function() {
    describe('when registered  on the retrieved element', function() {
      xit('fires a callback when the element is clicked', function() {
      })
    })
  })
})
