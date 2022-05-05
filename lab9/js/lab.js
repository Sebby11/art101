/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 4 May
* License: Public Domain
*/

// Runs when full HTML document is loaded
window.onload = function(){
	// Div HTML element
	var outputEl = document.getElementById("output");

	// HTML elements to be placed in div
	var new1El = document.createElement("p");
	new1El.innerHTML = "This is a paragraph element added through JS!";

	var new2El = document.createElement("h4");
	new2El.innerHTML = "Wow! This is an <h4> element added through JS!";

	// Append HTML elements to div element
	outputEl.appendChild(new1El);
	outputEl.appendChild(new2El);
}