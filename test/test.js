var code = require('../main.js')
var expect = require('chai').expect

describe("leapYear", function () {
  it("will not give % by 400"), function () {
    expect(code.leapYear(1700)).to.equal(false)
  }
  it("will give us leap year", function() {
  expect(code.leapYear(2016)).to.equal(true)
  })
})
