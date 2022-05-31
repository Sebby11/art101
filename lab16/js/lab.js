/*
* Authors: Alexa Medina <albmedina@ucsc.edu> & Sebastian Medina <seamedin@ucsc.edu>
* Created: 30 May
* License: Public Domain
*/

// Do something once button is clicked
$("#activate").click(function() {
	// Choose a berry ID from the different pokemon berries
	var comicNum = Math.floor(Math.random() * 2500)

	// Get endpoint url for berry
	var endPoint = "https://xkcd.com/"+ comicNum +"/info.0.json";

	$.ajax({
		url: endPoint,
		data: {},
		type: "GET",
		dataType: "json",
		// If we succeed in grabbing data
		success: function(comicObj) {
			console.log("Endpoint data:\n", comicObj)
			var title = comicObj.title;
			var comicImg = comicObj.img;

			var outputString = "Comic name: "+ title +".";
			var outputImg = $('<img src="'+ comicImg +'">')


			$("#comTitle").html(outputString);
			$("#output").html(outputImg);
		}
	})
	.fail(function(xhr, status, error){
		$("#output").html(error+" Status: "+status);
	})
})