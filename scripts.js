
function isANumber(num) {
  return (num != "" && $.isNumeric(num));
}

$(document).ready(function() {
  $('#basic-prob-result').text("test");

  $('#basic-prob-submit').on('click', function() {
    var prob = $('#basic-prob-prob').val();
    var over = $('#basic-prob-over').val();
    var under = $('#basic-prob-under').val();
    numNumeric = (isANumber(prob) ? 1 : 0) + (isANumber(over) ? 1 : 0) + (isANumber(under) ? 1 : 0);
    // test that there is the right number of inputs
    if (numNumeric == 2) {
      returnText = ""
      if (!isANumber(prob)) {
        if (over > under) { returnText = "Over must be smaller than under" }
        else {
          // calculate the probability
          returnText = "Probability = " + (over / under);
        }
      } else if (!isANumber(over)) {
        if (prob > 1 || prob < 0) { returnText = "Probability must be between 0 and 1" }
        else {
          // calculate over
          returnText = "Over: " + (under * prob);
        }
      } else if (!isANumber(under)) {
        if (prob > 1 || prob < 0) { returnText = "Probability must be between 0 and 1" }
        else {
          // calculate under
          returnText = "Under: " + (over / prob);
        }
      }
      $('#basic-prob-result').text(returnText);
    } else {
      $('#basic-prob-result').text("Please enter 2 numbers");
    }

  })
})

