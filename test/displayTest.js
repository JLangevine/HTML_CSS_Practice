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
    const dom = new JSDOM(`<!DOCTYPE html><head><script src="shuffle.js"> </script></head>
<body>
  <h4>Your Random Word is: <h4 id="word"></h4></h4><br>

</body>`,{ runScripts: 'dangerously', resources: 'usable' });

    var buttonToClick = dom.window.document.createElement("button");
    buttonToClick.id = "btn1";
    dom.window.document.getElementById("btn1").addEventListener("click", shuffle());
    var testing = dom.window.document.getElementById("word").innerHTML;
   	assert.equal(testing, !'', "The wordBlock was null");
   });

});