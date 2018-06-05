// Business (or back-end) logic:

var add = function(number1, number2) {
  console.log(number1 + " in the add function.")
  return number1 + number2;
};
//redo all the shit below this

$(document).ready(function() {
  $("form#was-validated").submit(function(event) {
    var answer = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var quote = (100 - age) * 3;

    $("#rate").empty().append(quote);
    $("#quote").show();

    event.preventDefault();
  });
});

if (answer === 1) {
  //show picture of the balrog
}

if (answer === 2) {
  //show picture of the uru-khai
}

if (answer === 3) {
  //show picture of the The Shire
}






// http://activelab.io/code-snippets/trigger-change-event-of-dropdown-using-jquery
