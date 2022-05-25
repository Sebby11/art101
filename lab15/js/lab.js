/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 25 May
* License: Public Domain
*/

// Do something once button is clicked
$("#activate").click(function() {
	// Choose a berry ID from the different pokemon berries
	var berryID = Math.floor(Math.random() * 64)

	// Get endpoint url for berry
	var endPoint = "https://pokeapi.co/api/v2/berry/"+berryID+"/";

	$.ajax({
		url: endPoint,
		data: {},
		type: "GET",
		dataType: "json",
		// If we succeed in grabbing data
		success: function(data) {
			var berry = data.name;
			var growTime = data.growth_time;
			console.log("Berry from endpoint: ", berry);

			var outputString = "You got the "+ berry +" berry!";
			outputString += "\nIt takes "+ growTime +" units of time to grow!";

			// Build string of data
			//var dataString = "";
			//dataString += "<h3>"+comicTitle+"</h3>"+
					//"<img src='"+comicImg+"' title='"+
					//comicTitle+"'>";

			// Replace page data
			$("#output").html(outputString);
		}
	})
	.fail(function(xhr, status, error){
		$("#output").html(error+" Status: "+status);
	})
})