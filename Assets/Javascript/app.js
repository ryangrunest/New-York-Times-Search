/* API Key = IZXj7BjN7oauLYCKocfKCTNV6moMqX1K */
var search;
var numberRecords;
var begin_date = '';
var end_date = '';


$("#search-button").on("click", function() {
    var search = $("#search").val();
    if ($('#start').val() != '') {
    	var begin_date = `&begin_date=${$("#start").val()}0101`;
    }
    if ($('#end').val() != '') {
    	var end_date = `&end_date=${$("#end").val()}0101`;
    }
    
    var numberRecords = $('#number').val();

    //API query link
    // 
    if(begin_date)
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+begin_date+end_date+"&api-key=IZXj7BjN7oauLYCKocfKCTNV6moMqX1K";

    //ajax function to pull from API
    $.ajax({
      url: queryURL,
      method: "GET",
      success: function(query) {
      	// searchFunc();

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