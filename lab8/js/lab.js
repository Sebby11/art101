/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 2 May
* License: Public Domain
*/

// Create Array of # values
var numArray = [1,2,3,4,5];

// Create addition function
function addTwo(a, b) {
	result = a + b;
	return result;
}

// Test function
console.log(addTwo(1, 2))
console.log(addTwo(1, 98))
console.log(addTwo(4, 5))

// Use mapping with addTwo func & our # array
console.log(numArray.map(addTwo));

console.log(numArray.map(function(a,b) {
	return a % b;
}))

window.onload = function(){
	const arrayElement = document.getElementById("array");
	arrayElement.innerHTML = "Our array to test function is: [" + numArray + "]";

	const addFuncElement = document.getElementById("addFunc");
	const modFuncElement = document.getElementById("modFunc");

	addFuncElement.innerHTML = "After addition function: [" +
					numArray.map(addTwo) + "]"; 

	modFuncElement.innerHTML = "After modding function: [" +
					numArray.map(function(a,b) {
									return a % b;
									}) 
					+ "]"; 
}