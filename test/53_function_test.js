var assert = require("assert");assert.equal( hello_joe("Joe"), "Hello!");
  	
var hello = require('../hello');
var hello_uppercase = require('../hello_uppercase');
var hello_joe = require('../hello_joe');




describe("53 function using node js", function(){
  it("should return Hello world", function(){

    assert.equal( hello(), "Hello world");
  });

  it("should returns 'Hello, USERNAME!'. If no username is supplied it should return 'HELLO!'.", function(){

    assert.equal( hello_uppercase("ntombi"), "Hello, NTOMBI");
    assert.equal( hello_uppercase(), "HELLO!");
  });

  it("should return returns 'Hello, USERNAME!'. If the username is Joe or Bob only say 'Hello!'", function(){

    assert.equal( hello_joe("Ntombi"), "Hello, Ntombi");
  	assert.equal( hello_joe("Joe"), "Hello!");
  	assert.equal( hello_joe("Bob"), "Hello!");
  });

});
