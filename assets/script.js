//get input from form on submit
//build query url
//make Ajax call
//dynamically make cards based on result

//var searchbtn = $('#search')
var searchTerm
var numOfRecs
var startYear
var endYear


$('#search').on('click', function(e){
    e.preventDefault();
    searchTerm = $('#search-term').val()
    numOfRecs = $('#number-of-records').val()
    startYear = $('#start-year').val()
    endYear = $('#end-year').val()


    console.log(searchTerm, numOfRecs, startYear, endYear)
})