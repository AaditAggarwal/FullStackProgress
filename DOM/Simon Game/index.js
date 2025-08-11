// variable declarations
var colors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnwser(userClickedPattern.length - 1);
});

// plays color sounds
function playSound(color) {
  var colorSound = new Audio("sounds/" + color + ".mp3");
  colorSound.play();
}

// animate button
function animatePress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 100);
}

// generates random index
function nextSequence() {
  userClickedPattern = [];
  var index = Math.floor(Math.random() * 4);

  // push the random color
  var randomColor = colors[index];
  gamePattern.push(randomColor);

  // flash the button
  var colorButton = $("#" + randomColor);
  colorButton.fadeIn(100).fadeOut(100).fadeIn(100);

  // play sound
  playSound(randomColor);

  level++;
  $("#level-title").text("Level " + level);
}

// checkAnswer
function checkAnwser(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      console.log("success");
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// reset the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
