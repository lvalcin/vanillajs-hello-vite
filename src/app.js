/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suitArray = ["♦", "♥", "♠", "♣"];
  let cardArray = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suitIndex = Math.floor(Math.random() * 3);
  let cardIndex = Math.floor(Math.random() * 12);

  let randomSuit = suitArray[suitIndex];
  let randomCard = cardArray[cardIndex];

  console.log(suitIndex);

  let topSuit = document.querySelector(".top-left");
  console.log("topsuit", topSuit);
  console.log("randomSuit", randomSuit);
  let bottomSuit = document.querySelector(".bottom-right");
  topSuit.innerHTML = randomSuit;
};
