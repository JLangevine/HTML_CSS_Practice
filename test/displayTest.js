var chai = require('chai');
var assert = chai.assert;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('DisplayText', function() {
  it ('should start empty', function(){
    const dom = new JSDOM(`<!DOCTYPE html><h4>Your Random Word is: <h4 id="word"></h4></h4><br>`);
  	var wordBlock = dom.window.document.getElementById("word").innerHTML;

  	assert.equal(wordBlock, '', "The wordBlock was not empty");
  });

   it ('should update the html id "word" block', function(){
global.dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.createElement = dom.window.document.createElement;
global.getElementById = dom.window.document.getElementById;

var h4 = dom.window.document.createElement('div');
h4.id ="word";
h4.innerHTML = "Hello World";
dom.window.document.body.appendChild(h4);
var result = dom.window.document.body.firstChild.innerHTML;
assert.equal(result,'Hello World');
   });
});