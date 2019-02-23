/* API Key = IZXj7BjN7oauLYCKocfKCTNV6moMqX1K */
var search
var numberRecords
var begin_date
var end_date


$("#search-button").on("click", function() {
    var search = $("#search").val();
    var begin_date = $("start").val();
    var end_date = $("end").val();

    //API query link
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&"+begin_date+"&"+end_date+"&api-key=IZXj7BjN7oauLYCKocfKCTNV6moMqX1K"

    //ajax function to pull from API
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    //what happens when you pull
      .then(function(response) {
console.log(response)


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