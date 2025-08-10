var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = Math.floor(Math.random() * 6) + 1;

diceImage1 = "images/dice" + randomDice1 + ".png";
diceImage2 = "images/dice" + randomDice2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImage1);
document.querySelector(".img2").setAttribute("src", diceImage2);

if (randomDice1 > randomDice2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomDice1 < randomDice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
