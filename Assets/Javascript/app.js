/* API Key = IZXj7BjN7oauLYCKocfKCTNV6moMqX1K */

// init search variables
var search;
var numberRecords = 1;
var begin_date;
var end_date;
var searchStr = '';

// search button on click functionality
$("#search-button").on("click", function() {
	// if dates are not empty, store value from user input
    var search = $("#search").val();
    if ($('#start').val() != '') {
    	var begin_date = `&begin_date=${$("#start").val()}0101`;
    }
    if ($('#end').val() != '') {
    	var end_date = `&end_date=${$("#end").val()}0101`;
    }
    
    // set number of records to retrieve
    if ($('#number').val() != undefined) {
    	var numberRecords = Int($('#number').val());
    }
    



    if (search != undefined){
    	searchStr = searchStr+search;
    }
    if (begin_date != undefined){
   		searchStr = searchStr+begin_date;
    }
    if (end_date != undefined){
    	searchStr = searchStr+end_date;
    }

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchStr+"&api-key=IZXj7BjN7oauLYCKocfKCTNV6moMqX1K";

    //ajax function to pull from API
    $.ajax({
      url: queryURL,
      method: "GET",
      success: function(query) {
      	if (numberRecords != undefined) {
      		for (var i = 0; i < numberRecords; i++) {

      		}
      	}
      	console.log(query);
      	var data = query.response.docs[0];
      	var header = $('<div>');
      	console.log(data);

      },
      error: function() {
      	alert('Error: Articles Not Found');
      }
    });

       


//         //creates the img tag for image to appear
//         var catImage = $("<img>");

//         //attaches attributes to catImage variable
//         catImage.attr("src", imageUrl);
//         catImage.attr("alt", "cat image");

//         //prepends the images
//         $("#images").prepend(catImage);
//       });
   });