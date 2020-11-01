//get input from form on submit
//build query url
//make Ajax call
//dynamically make cards based on result




var resultContainer = $('#results-display')
var key = "&api-key=Lt3FYwaGXu0TimyCtkZtH8LkZqaqYXfd"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="

$('form').on('submit', function(e){
    e.preventDefault();
    $(".resultCard").remove()
    $.ajax({
        url: queryURL + $('#search-term').val() + key,
        method: "get"
      }).then(function(resp) {
        var articles = resp.response.docs
        //loop over docs array
        var numOfRecs = $('#number-of-records').val()
        for (var i =0; i < numOfRecs; i++){
        //generate card for each item
        console.log(articles[i].pub_year)
           var resultDisplay = document.createElement('div')
               resultDisplay.setAttribute('class', "resultCard")
               resultDisplay.textContent = articles[i].headline.main + " " + articles[i].byline.original
        //append results div
               resultContainer.append(resultDisplay)
        }
    });

})







