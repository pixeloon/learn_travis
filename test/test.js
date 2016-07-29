  var code = require('../index');
  var expect = require('chai').expect;



describe("Hello World", function() {
  it("should really say 'Hello, World!' when ran", function() {
    expect(code.helloWorld()).to.equal("Hello, World!");
  });
});