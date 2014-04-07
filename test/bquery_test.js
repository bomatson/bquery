var assert = require("assert")
var xx = require('../bquery');

describe('xx', function() {
  describe('by default', function() {
    it('returns no element on the page', function() {
      assert.equal('No element was found on the page', xx());
    })
  })

  describe('given an id', function() {
    it('returns the html element with the id', function() {
      assert.equal('id', xx('#id'));
    })
  })

  describe('given an class name', function() {
    it('returns the html element with the class name', function() {
      assert.equal('class', xx('.class'));
    })
  })

  describe('given a tag name', function() {
    it('returns each html element with that tage name', function() {
      assert.equal('tag', xx('<div>'));
    })
  })
})
