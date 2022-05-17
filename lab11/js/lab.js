/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 17 May
* License: Public Domain
*/

/*
- Self made function to easily create button for given div in
	jQuery
- Adding a phrase as a parameter allows us to change button name
- Give each button's an id so they can be acecssed later
*/
function setButton(div, phrase, id){
    var $button = $('<input type="button" id="'+ id +'" value="'+ phrase +'" />');
    $button.appendTo($(div));
}

function setSpecial(div, button){
	// Add # through string concatenation
	$("#"+button).click(function(){
		// change div class
		$(div).toggleClass("special");
	})
}

/* 
- Using onload as we have script in header; therefore, no direct
	access to elements within HTML body.
*/
window.onload = function(){
	/*
	- I spent a while on this because I forgot to add the '#'
		to the beginning of the id names
	*/

	// Create Ids for buttons
	var chalButton = "chalButton";
	var probButton = "probButton";
	var resButton = "resButton";

	// Create actual buttons through jQuery function
	setButton("#challenge", "Challenge", chalButton);
	setButton("#problems", "Problems", probButton);
	setButton("#results", "Results", resButton);

	// *** Set functionality for each button ***
	setSpecial("#challenge", chalButton);
	setSpecial("#problems", probButton);
	setSpecial("#results", resButton);
}