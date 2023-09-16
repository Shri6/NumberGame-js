"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
let win;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess);
  if (!guess) {
    displayMessage("⛔ No Number");
  } else if (guess === secretNumber) {
    displayMessage("🥳 Currect Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    win = true;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "😂 Too High" : "😂 Too low");
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    } else {
      displayMessage("😒 You lost the Game");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".guess").value = "";
    }
  }
});

console.log('check github');

document.querySelector(".again").addEventListener("click", function () {
  if (win) {
    if (score > highscore) {
      highscore = score;
    }
    score = 20;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".highscore").textContent = highscore;
  }
});
