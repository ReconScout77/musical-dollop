function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

var roundScore = 0;

var totalScore = 0;



$(function() {
  $("#play").submit(function(event) {
    event.preventDefault();
    var thisRoll = getRandom();

    $(".displayNumber").text(thisRoll);

    if (thisRoll === 1) {
      roundScore = 0;
    } else {
      roundScore += thisRoll;
    }
    $(".results").text(totalScore + roundScore);
  });
  $("#hold").submit(function(event) {
    event.preventDefault();
    totalScore += roundScore;
    roundScore = 0;
  });
});
