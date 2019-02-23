// init search variables
var search;
var numberRecords=1;
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
    // if ($("number").val()!=0){
    var numberRecords = $('#number').val();



    if (search != undefined){
      searchStr = searchStr+search;
    };
    if (begin_date != undefined){
      searchStr = searchStr+begin_date;
    };
    if (end_date != undefined){
      searchStr = searchStr+end_date;
    };

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchStr+"&api-key=IZXj7BjN7oauLYCKocfKCTNV6moMqX1K";
    $.ajax({
      url: queryURL,
      method: "GET",
      success: function(query) {
        // searchFunc();
        if (numberRecords !=undefined){
          for (var i=0; i<numberRecords; i++){
            var data = query.response.docs[i];
            var articleDiv = $('<div>');
            var headlineDiv = $('<div>');
            var authorDiv = $('<div>');
            var sectionDiv = $('<div>');
            var artDateDiv = $('<div>');
            var urlDiv = $('<a>');
                
            var headlineText = data.headline.main;
            var authorText = data.byline.original;
            var sectionText = data.section_name;
            var artDateText = data.pub_date;
            var urlText = data.web_url;
    
            headlineDiv.text(headlineText);
            authorDiv.text(authorText);
            sectionDiv.text(sectionText);
            artDateDiv.text(artDateText);
            urlDiv.attr("href",urlText).text(urlText);
             
            articleDiv.append(headlineDiv, authorDiv, sectionDiv, artDateDiv, urlDiv);
            $('#articles').append(articleDiv);
        
          }

          }

        
        
      },
      error: function() {
        alert('Error: Articles Not Found');
      }
    });
  });// init search variables
var search;
var numberRecords=1;
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
    // if ($("number").val()!=0){
    var numberRecords = $('#number').val();



    if (search != undefined){
      searchStr = searchStr+search;
    };
    if (begin_date != undefined){
      searchStr = searchStr+begin_date;
    };
    if (end_date != undefined){
      searchStr = searchStr+end_date;
    };

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchStr+"&api-key=IZXj7BjN7oauLYCKocfKCTNV6moMqX1K";
    $.ajax({
      url: queryURL,
      method: "GET",
      success: function(query) {
        // searchFunc();
        if (numberRecords !=undefined){
          for (var i=0; i<numberRecords; i++){
            var data = query.response.docs[i];
            var articleDiv = $('<div>');
            var headlineDiv = $('<div>');
            var authorDiv = $('<div>');
            var sectionDiv = $('<div>');
            var artDateDiv = $('<div>');
            var urlDiv = $('<a>');
                
            var headlineText = data.headline.main;
            var authorText = data.byline.original;
            var sectionText = data.section_name;
            var artDateText = data.pub_date;
            var urlText = data.web_url;
    
            headlineDiv.text(headlineText);
            authorDiv.text(authorText);
            sectionDiv.text(sectionText);
            artDateDiv.text(artDateText);
            urlDiv.attr("href",urlText).text(urlText);
             
            articleDiv.append(headlineDiv, authorDiv, sectionDiv, artDateDiv, urlDiv);
            $('#articles').append(articleDiv);
        
          }

          }

        
        
      },
      error: function() {
        alert('Error: Articles Not Found');
      }
    });
  });