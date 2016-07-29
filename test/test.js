  var code = require('../index');
  //brings in chai functionality, makes test code more readable
  var expect = require('chai').expect;


describe("Hello World", function() {
  it("should really say 'Hello, World!' when ran", function() {
    expect(code.helloWorld()).to.equal("Hello, World!");
  });
});