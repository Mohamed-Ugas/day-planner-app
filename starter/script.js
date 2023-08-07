
var date = dayjs("2023-12-13").format("dddd, MMMM, D"); 
console.log(date);
$( document ).ready(function() {
    $("#currentDay").text(date);
});

