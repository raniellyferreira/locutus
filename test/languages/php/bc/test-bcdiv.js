XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var bcdiv = require('/Users/kvz/code/phpjs/src/php/bc/bcdiv.js')

describe('php.bc.bcdiv.js', function () {
  it.skip('should pass example 1', function (done) {
    bcdiv(1, 2)
    var expected = 3
    var result = bcdiv(1, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})