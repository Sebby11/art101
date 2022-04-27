/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 20 April
* License: Public Domain
*/

function setUserName(){
	userName = window.prompt("Enter your name below:");

	// turn userName from string to list of characters
	nameArray = userName.split('');
	console.log("UserName: " + nameArray);

	// Sort the list of characters
	nameArray.sort(function (a, b) {
    			return a.toLowerCase().localeCompare(b.toLowerCase());
    		});

	console.log("Name after sorted: " + nameArray);

	// Join back into a string
	userName = nameArray.join('');

	return userName;
}


document.writeln(setUserName());