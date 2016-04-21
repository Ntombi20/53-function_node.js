var assert = require("assert");
var hello = require('../hello');
var hello_uppercase = require('../hello_uppercase');
var hello_joe = require('../hello_joe');
var number_list = require('../number_list');
var sum_numbers = require('../sum_numbers');
var length = require('../length');
var upper = require('../upper');
var reverse = require('../reverse');
var hello_list = require('../hello_list');



describe("53 function using node js", function(){
  it("should return Hello world", function(){

    assert.equal( hello(), "Hello world");
  });

  it("should returns 'Hello, USERNAME!'. If no username is supplied it should return 'HELLO!'.", function(){

    assert.equal( hello_uppercase("ntombi"), "Hello, NTOMBI");
    assert.equal( hello_uppercase(), "HELLO!");
  });

  it("should returns 'Hello, USERNAME!'. If the username is Joe or Bob only say 'Hello!'", function(){

    assert.equal( hello_joe("Ntombi"), "Hello, Ntombi");
  	assert.equal( hello_joe("Joe"), "Hello!");
  	assert.equal( hello_joe("Bob"), "Hello!");
  });

  it("should returns a list of numbers from 1 to n", function(){

    assert.deepEqual( number_list(21), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
  });

  it("should return a sum of numbers from 1 to n", function(){

	   assert.deepEqual( sum_numbers(6), 21);
  });

  it("should returns the length of the string", function(){

    assert.equal( length("I love coding so much"), 21);
  });

  it("should return a string in uppercase", function(){

    assert.equal( upper("i have a beautiful sister, beauty"), "I HAVE A BEAUTIFUL SISTER, BEAUTY");
  });

  it("should return a string reversed", function(){

    assert.equal( reverse("I am enjoying all the katas"), "satak eht lla gniyojne ma I");
  });

  it("should returns a list of 'hello world' entries equal to the number supplied", function(){

    assert.deepEqual( hello_list(7), ["hello world", "hello world", "hello world", "hello world", "hello world", "hello world", "hello world"]);
  });


});
