/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 25 April
* License: Public Domain
*/

// Declare main variables
var myTransport = ["Car", "Bus", "Bike"];

var myMainRide = {'Make':'Honda', 'Model':'CR-v', 
				'Color':'Silver', 'Year':2005, 'Age':17};

// Output to html
document.writeln("My main transport: ", myTransport, "</br></br>");

document.writeln("My ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>" );
