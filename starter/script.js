
var date = dayjs("2023-12-13").format("dddd, MMMM, D"); 
console.log(date);
$( document ).ready(function() {
    $("#currentDay").text(date);
});

var currentTime = new Date();
var currentHour = currentTime.getHours();

console.log(currentHour);

// we use jQuery with all the html elements with the CSS class col-md-10 and put it in the variable textAreas.
var textAreas = $(".col-md-10");

// we are looping through the textAreas. and we getting id of each textarea and you have to use the $ on textAreas so that you can use it with jQuery
for (let i = 0; i < textAreas.length; i++) {
    var textAreaId = $(textAreas[i]).attr("id");
// textAreaId is the number and textAreas[i] is the element
    if (textAreaId == currentHour) {
        $(textAreas[i]).addClass("present");
    } else if( textAreaId < currentHour) {
        $(textAreas[i]).addClass("past");
    } else {
        $(textAreas[i]).addClass("future");
    }
  }

