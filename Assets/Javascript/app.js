// init search variables
var search;
var numberRecords = 10;
var begin_date;
var end_date;
var searchStr = '';

$('select[id=number]').on('change', function() {
  numberRecords = parseInt($(this).val());
})

// search button on click functionality
$("#search-button").on("click", function() {
  // if dates are not empty, store value from user input
    var search = $("#search").val();
    if ($('#start').val() != '') {
      var begin_date = `&begin_date=${$("#start").val()}0101`;
    };
    if ($('#end').val() != '') {
      var end_date = `&end_date=${$("#end").val()}0101`;
    };

    if (search != undefined){
      searchStr = searchStr + search;
    };
    if (begin_date != undefined){
      searchStr = searchStr + begin_date;
    };
    if (end_date != undefined){
      searchStr = searchStr + end_date;
    };

    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchStr}&api-key=IZXj7BjN7oauLYCKocfKCTNV6moMqX1K`;
    $.ajax({
      url: queryURL,
      method: "GET",
      // if successfully grabbed object for 
      success: function(query) {
        $('#articles').text('');
        console.log(query);
        var data = query.response;
          for (var i = 0; i < numberRecords; i++) {
          var articleDiv = $('<div>').attr('class', 'card-body col-12');
          var headlineDiv = $('<h4>');
          var authorDiv = $('<div>');
          var sectionDiv = $('<div>');
          var artDateDiv = $('<div>');
          var urlDiv = $('<a>');
                
          var headlineText = data.docs[i].headline.main;
          var authorText = data.docs[i].byline.original;
          var sectionText = data.docs[i].section_name;
          var artDateText = data.docs[i].pub_date;
          var urlText = data.docs[i].web_url;
  
          headlineDiv.text(headlineText);
          authorDiv.text(authorText);
          sectionDiv.text(sectionText);
          artDateDiv.text(`Published: ${artDateText}`);
          urlDiv.attr("href", urlText).text(urlText);
           
          articleDiv.append($('<hr>'), headlineDiv, authorDiv, sectionDiv, artDateDiv, urlDiv, $('<hr>'));
          $('#articles').append(articleDiv);
          };     
      },
      error: function() {
        alert('Error: Articles Not Found');
      }
    });
  });