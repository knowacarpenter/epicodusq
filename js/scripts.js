// Business (or back-end) logic:
/*
var add = function(number1, number2) {
  console.log(number1 + " in the add function.")
  return number1 + number2;
};
*/
$(document).ready(function() {

  console.log("I am ready.");

  $('#question1').submit(function() {
    event.preventDefault();
    var q1 = parseInt($("#dropdown1").val());
    console.log(q1 + ' WHERe ARE YOU');
    // do something
  });
});
/*

if (answer === 1) {
  //show picture of the balrog
} else if (answer === 2) {
  //show picture of the uru-khai
} else {
  //show picture of the The Shire
}



*/





// http://activelab.io/code-snippets/trigger-change-event-of-dropdown-using-jquery
//
