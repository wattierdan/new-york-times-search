//get input from form on submit
//build query url
//make Ajax call
//dynamically make cards based on result

var resultContainer = $('#results-display')
var key = "&api-key=Lt3FYwaGXu0TimyCtkZtH8LkZqaqYXfd"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
var numOfRecs = $('#number-of-records')
var startYear = $('#start-year')
var endYear = $('#end-year')
var searchTerm = $('#search-term')

function createParams() {
    var startYearVal = startYear.val().trim() + "0101"
    var endYearVal =  endYear.val().trim() + "0101"
    params = searchTerm.val().trim()
    if (startYearVal !== "0101") {
        params += "&begin_date=" + startYearVal
    }
    if (endYearVal !== "0101") {
        params += "&end_date=" + endYearVal
    } 
}
    
$('form').on('submit', function(e){
    e.preventDefault();
    $(".resultCard").remove()
    createParams() 
    $.ajax({
        url: queryURL + params + key,
        method: "get"
      }).then(function(resp) {
        console.log()
        var articles = resp.response.docs
        //loop over docs array
        for (var i =0; i < numOfRecs.val().trim(); i++){
            var theDate = articles[i].pub_date.substring(0, 10)
            //generate card for each item
            var articleCount = i + 1 + ":"
            var resultDisplay = document.createElement('div')
                resultDisplay.setAttribute('class', "resultCard")
            //if no byline make it an empty string
            if (articles[i].byline.original === null) {
                articles[i].byline.original = ''
            }
            resultDisplay.textContent = articleCount + " " +
                theDate + " " + 
                articles[i].headline.main + " " + 
                articles[i].byline.original
            //append results div
            resultContainer.append(resultDisplay)
        }
    });

})







