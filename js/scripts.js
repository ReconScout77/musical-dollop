function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

var roundScore = 0;

var p1Score = 0;
var p2Score = 0;


$(function() {
  $("#play").submit(function(event) {
    event.preventDefault();
    var thisRoll = getRandom();

    $(".display1").text(thisRoll);

    if (thisRoll === 1) {
      roundScore = 0;
      $("#player1").toggle();
      $("#player2").toggle();
    } else {
      roundScore += thisRoll;
    }
    $(".results").text(p1Score + roundScore);
  });

  $("#hold").submit(function(event) {
    event.preventDefault();
    p1Score += roundScore;
    roundScore = 0;
    $("#player1").toggle();
    $("#player2").toggle();

    if (p1Score >= 100) {
      alert("Player 1 Wins!!!");
    }
  });

  $("#play2").submit(function(event) {
    event.preventDefault();
    var thisRoll = getRandom();

    $(".display2").text(thisRoll);

    if (thisRoll === 1) {
      roundScore = 0;
      $("#player1").toggle();
      $("#player2").toggle();
    } else {
      roundScore += thisRoll;
    }
    $(".results2").text(p2Score + roundScore);
  });
  $("#hold2").submit(function(event) {
    event.preventDefault();
    p2Score += roundScore;
    roundScore = 0;
    $("#player1").toggle();
    $("#player2").toggle();

    if (p2Score >= 100) {
      alert("Player 2 Wins!!!");
    }
  });
});
