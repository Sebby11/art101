/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 18 May
* License: Public Domain
*/

function FizzBuzz(){
	// Clear output div
	$("#output").html("");

	// Get main output div
	var outputDiv = document.getElementById("output");

	// Loop through Fizz Buzz Booms 1 - 200
	for (var i = 1; i <= 200; i++){
		// Tmp string adding words
		var exclaimFlag = 0;
		var tmpVal = "";

		// Create paragraph element
		var tmpParagraph = document.createElement("p");
		tmpParagraph.innerHTML = i;

		// Set to either fizz, buzz, boom, etc	
		if (i % 3 == 0){
			tmpVal += "Fizz";
			exclaimFlag = 1;
		}
		if (i % 5 == 0){
			tmpVal += "Buzz";
			exclaimFlag = 1;
		}
		if (i % 7 == 0){
			tmpVal += "Boom";
			exclaimFlag = 1;
		}

		if (exclaimFlag){
			tmpParagraph.innerHTML += "-";
			tmpVal += "!";
			tmpParagraph.innerHTML += tmpVal;
		}

		// Append element to main HTML file
		outputDiv.appendChild(tmpParagraph);
	}
}