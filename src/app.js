/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suitArray = ["♦", "♥", "♠", "♣"];
  let suitIndex = Math.floor(Math.random() * 3);
  let randomSuit = suitArray[suitIndex];

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
  let cardIndex = Math.floor(Math.random() * 12);
  let randomCard = cardArray[cardIndex];

  let topSuit = document.querySelector(".top-left");
  topSuit.innerHTML = randomSuit;

  let bottomSuit = document.querySelector(".bottom-right");
  bottomSuit.innerHTML = randomSuit;

  let cardNumber = document.querySelector(".card-center");
  cardNumber.innerHTML = randomCard;
};
