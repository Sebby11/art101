/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 9 May
* License: Public Domain
*/

function doSomething() {
	var name = document.getElementById("user-name");
	var button = document.getElementById("my-button");
	var pName = document.getElementById("pName");
	var announce = document.getElementById("announce");
	var form = document.getElementById("form");

	// Prevents page reload on form submission
	function preventReload(event) { event.preventDefault(); } 
	form.addEventListener('submit', preventReload);

	// turn userName from string to list of characters
	nameArray = name.value.split('');
	console.log("UserName: " + nameArray);

	// Sort the list of characters
	nameArray.sort(function (a, b) {
    			return a.toLowerCase().localeCompare(b.toLowerCase());
    		});

	console.log("Name after sorted: " + nameArray);

	// Join back into a string
	userName = nameArray.join('');

	// Replace pName with user's name & announce w/ announcement
	announce.innerText = "Your sorted name is below:";
	pName.innerText = userName;
}