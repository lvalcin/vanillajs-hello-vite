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

  // let cardSuit = ["♦", "♥", "♠", "♣"
  // cardSuit.forEach()=>{

  let cardSuitLeft = document.querySelector(".top-left");
  if (randomSuit === "♦" || randomSuit === "♥") {
    cardSuitLeft.style.color = "red";
  } else {
    cardSuitLeft.style.color = "black";
  }

  let cardSuitRight = document.querySelector(".bottom-right");
  if (randomSuit === "♦" || randomSuit === "♥") {
    cardSuitRight.style.color = "red";
  } else {
    cardSuitRight.style.color = "black";
  }
};
