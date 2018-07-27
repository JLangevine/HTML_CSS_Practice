const jsdom = require("jsdom");
const { JSDOM } = jsdom;



function shuffle2(){
		var word = "Changed";
		/*global.dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.createElement = dom.window.document.createElement;
global.getElementById = dom.window.document.getElementById;*/
		
		document.getElementById("word").innerHTML = word;
		//document.body.firstChild.innerHTML = word;
		//dom.window.document.body.firstChild.innerHTML = "Changed";
	};

module.exports = shuffle2();