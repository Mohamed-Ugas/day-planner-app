
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

var saveButton = $(".saveBtn");

// is an event handler, when one of the "saveBtn" elements is clicked, the function inside the curly braces will be executed. 'this' refers to the specific button that was clicked. In this context, this represents the current save button that triggered the click event. The siblings() method returns all sibling elements of the selected element, Sibling elements are elements that share the same parent.

saveButton.on("click", function() {
    var timeBlock = $(this).siblings(".description").attr("id");
    var valueTextArea = $(this).siblings(".description").val()
    console.log(timeBlock, valueTextArea);
    localStorage.setItem(timeBlock, valueTextArea);
    
})

// loop goes through each time block from 9 AM to 5 PM (represented by numbers from 9 to 17), one by one.
for (let i = 9; i < 18; i++){
    // s selecting a specific HTML element on the page based on its ID.
    // .val() is a method provided by jQuery to access the value of an input element
    // backticks and ${} help you create strings with placeholders
    $(`#${i}`).val(localStorage.getItem(i));
}
