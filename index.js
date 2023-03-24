// set 2 dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

var diceImg1Source = "images/dice" + randomNumber1 + ".png";
var diceImg2Source = "images/dice" + randomNumber2 + ".png";

img1.setAttribute("src", diceImg1Source);
img2.setAttribute("src", diceImg2Source);

var res = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
  res.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  res.innerHTML = "🚩 Player1 Wins!";
} else {
  res.innerHTML = "Player2 Wins! 🚩";
}
