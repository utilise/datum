var expect = require('chai').expect
  , d3 = global.d3 = require('d3')
  , client = require('client')
  , shim = !client && polyfill()
  , datum = require('./')

describe('datum', function() {

  before(function(){
    /* istanbul ignore next */
    node = !client
      ? document.body.firstElementChild
      : document.body.appendChild(document.createElement('div'))

    node.__data__ = ['foo', 'bar']
  })

  after(function(){
    node.parentNode.removeChild(node)
  })

  it('should do nothing', function() {
    expect(datum(node)).to.be.eql(['foo', 'bar'])
  })

})

function polyfill(){
  window = require("jsdom").jsdom('<div>').defaultView
  global.document = window.document
}