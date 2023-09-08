"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
let win;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Currect Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    win = true;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😂 Too High";
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    } else {
      document.querySelector(".message").textContent = "😒 You lost the Game";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".guess").value = "";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😂 Too Low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    } else {
      document.querySelector(".message").textContent = "😒 You lost the Game";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".guess").value = "";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  if (win) {
    if (score > highscore) {
      highscore = score;
    }
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".highscore").textContent = highscore;
  }
});
