
function isANumber(num) {
  return (num != "" && $.isNumeric(num));
}
function isAProb(num) {
  return !(num < 0 || num > 1);
}

$(document).ready(function() {



  // basic probability calculator
  $('#basic-prob-submit').on('click', function() {
    var prob = parseFloat($('#basic-prob-prob').val());
    var over = parseInt($('#basic-prob-over').val());
    var under = parseInt($('#basic-prob-under').val());
    numNumeric = (isANumber(prob) ? 1 : 0) + (isANumber(over) ? 1 : 0) + (isANumber(under) ? 1 : 0);
    // test that there is the right number of inputs
    if (numNumeric == 2) {
      returnText = ""
      if (!isANumber(prob)) {
        if (over > under) { returnText = "Number of A outcomes must be smaller than the number of total outcomes" }
        else if (over < 0 || under < 0) { returnText = "Total outcomes and number of A outcomes must be positive" }
        else {
          // calculate the probability
          returnText = "Probability = " + (over / under);
        }
      } else if (!isANumber(over)) {
        if (!isAProb(prob)) { returnText = "Probability must be between 0 and 1" }
        else {
          // calculate over
          returnText = "Outcomes with A: " + Math.round(under * prob);
        }
      } else if (!isANumber(under)) {
        if (!isAProb(prob)) { returnText = "Probability must be between 0 and 1" }
        else {
          // calculate under
          returnText = "Total outcomes: " + Math.round(over / prob);
        }
      }
      $('#basic-prob-result').text(returnText);
    } else if (numNumeric == 3) {
      $('#basic-prob-result').text("Please leave the box you want to calculate blank");
    } else {
      $('#basic-prob-result').text("Please enter 2 values");
    }
  })





  // addition rule calculator
  $('#addition-rule-submit').on('click', function() {
    var or = parseFloat($('#addition-rule-prob-or').val());
    var a = parseFloat($('#addition-rule-prob-a').val());
    var b = parseFloat($('#addition-rule-prob-b').val());
    var and = parseFloat($('#addition-rule-prob-and').val());
    numNumeric = (isANumber(or) ? 1 : 0) + (isANumber(a) ? 1 : 0) + (isANumber(b) ? 1 : 0) + (isANumber(and) ? 1 : 0);
    // test that there is the right number of inputs
    if (numNumeric == 3) {
      returnText = ""
      if (!isANumber(or)) {
        if (!isAProb(a) || !isAProb(b) || !isAProb(and)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A or B) = " + (a + b - and);
        }
      } else if (!isANumber(a)) {
        if (!isAProb(or) || !isAProb(b) || !isAProb(and)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A) = " + (and + or - b);
        }
      } else if (!isANumber(b)) {
        if (!isAProb(or) || !isAProb(a) || !isAProb(and)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(B) = " + (and + or - a);
        }
      } else {
        if (!isAProb(or) || !isAProb(a) || !isAProb(b)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A and B) = " + (a + b - or);
        }
      }
      $('#addition-rule-result').text(returnText);
    } else if (numNumeric == 4) {
      $('#addition-rule-result').text("Please leave the box you want to calculate blank");
    } else {
      $('#addition-rule-result').text("Please enter 3 values");
    }
  })





  // multiplication rule calculator
  $('#multiplication-rule-submit').on('click', function() {
    var and = parseFloat($('#multiplication-rule-prob-and').val());
    var a = parseFloat($('#multiplication-rule-prob-a').val());
    var given = parseFloat($('#multiplication-rule-prob-given').val());
    numNumeric = (isANumber(and) ? 1 : 0) + (isANumber(a) ? 1 : 0) + (isANumber(given) ? 1 : 0);
    // test that there is the right number of inputs
    if (numNumeric == 2) {
      returnText = ""
      if (!isANumber(and)) {
        if (!isAProb(a) || !isAProb(given)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A and B) = " + (a * given);
        }
      } else if (!isANumber(a)) {
        if (!isAProb(and) || !isAProb(given)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A) = " + (and / given);
          console.log(a)
          console.log(and)
          console.log(given)
        }
      } else {
        if (!isAProb(a) || !isAProb(given)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A|B) = " + (a / and);
        }
      }
      $('#multiplication-rule-result').text(returnText);
    } else if (numNumeric == 3) {
      $('#multiplication-rule-result').text("Please leave the box you want to calculate blank");
    } else {
      $('#multiplication-rule-result').text("Please enter 2 values");
    }
  })








  // complement rule calculator
  $('#complement-rule-submit').on('click', function() {
    var a = parseFloat($('#complement-rule-prob-a').val());
    // test that there is the right number of inputs
    returnText = ""
    if (isANumber(a)) {
      if (!isAProb(a)) { returnText = "Probabilities must be between 0 and 1" }
      else { returnText = "P(A and B) = " + ( 1 - a ); }
    } else { returnText = "Please enter a probability for P(A)" }
    $('#complement-rule-result').text(returnText);
  })






  // bayes rule calculator
  $('#bayes-rule-submit').on('click', function() {
    var ab = parseFloat($('#bayes-rule-prob-ab').val());
    var a = parseFloat($('#bayes-rule-prob-a').val());
    var b = parseFloat($('#bayes-rule-prob-b').val());
    var ba = parseFloat($('#bayes-rule-prob-ba').val());
    numNumeric = (isANumber(ab) ? 1 : 0) + (isANumber(a) ? 1 : 0) + (isANumber(b) ? 1 : 0) + (isANumber(ba) ? 1 : 0);
    // test that there is the right number of inputs
    if (numNumeric == 3) {
      returnText = ""
      if (!isANumber(ab)) {
        if (!isAProb(a) || !isAProb(b) || !isAProb(ba)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A|B) = " + (a * ba / b);
        }
      } else if (!isANumber(a)) {
        if (!isAProb(ab) || !isAProb(b) || !isAProb(ba)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(A) = " + (ab * b / ba);
        }
      } else if (!isANumber(b)) {
        if (!isAProb(ab) || !isAProb(a) || !isAProb(ba)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(B) = " + (ba * a / ab);
        }
      } else {
        if (!isAProb(ab) || !isAProb(a) || !isAProb(b)) { returnText = "Probabilities must be between 0 and 1" }
        else {
          returnText = "P(B|A) = " + (b * ab / a);
        }
      }
      $('#bayes-rule-result').text(returnText);
    } else if (numNumeric == 4) {
      $('#bayes-rule-result').text("Please leave the box you want to calculate blank");
    } else {
      $('#bayes-rule-result').text("Please enter 3 values");
    }
  })


})

