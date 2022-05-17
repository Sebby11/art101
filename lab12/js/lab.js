/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 16 May
* License: Public Domain
*/

function sortingHat(str){
	console.log("OUR STRING: ", str)
	// Get length of string
	var strLen = str.length;

	// Set variable # of letters
	var numLetters = 0;

	// for loop through string
	for (var position = 0; position < strLen; position++){
		if (str[position] >= "a" && str[position] <= "z" ||
			str[position] >= "A" && str[position] <= "Z"){
			// Add one
			numLetters += 1;
		}
	}
	console.log("Number of letters: ", numLetters);

	// set some variable varLen % 4
	var modval = numLetters % 4;

	// get potter house w/ house[modValue]
	if (modval == 0)
		return "Ravenclaw";
	else if (modval == 1)
		return "Gryffindor";
	else if (modval == 2)
		return "Hufflepuff";
	else
		return "Slytherin";
}


window.onload = function(){
	var button = document.getElementById("button");

	// Crete event listener
	button.addEventListener("click", function() {

		// Get name from input field (.value)
		var s = document.getElementById("input").value;

		// Call sortingHat on name
		var house = sortingHat(s);

		// Set innerHTML on hatValue innerHTML
		var hatSaying = s + ", your house is " + house + "!";
		document.getElementById("hatValue").innerHTML = hatSaying; 

	})
}