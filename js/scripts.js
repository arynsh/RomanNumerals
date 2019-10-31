$(document).ready(function() {

  $(".form-1").submit(function(event) {
    event.preventDefault();

    var formInput = $("#form-field").val();

    var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10,9, 5, 4, 1];
    var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    var finalResult = '';

    var converter = function(number){
      if(number > 4000 || number <= 0){
        alert("Please enter a number between 1 and 4000.");
      }
      for (var i = 0; i < nums.length; i++){
        while (number >= nums[i]){

          finalResult = finalResult + romans[i];
          number = number - nums[i];

        }
      }
      return finalResult ;
    }

    $("#results-para").text(converter(formInput));
    $(".results").show();

  });
});
