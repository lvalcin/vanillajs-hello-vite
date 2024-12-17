/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My phone", "The wi-fi", "My friend"];
  let action = [
    "ate my homework",
    "battery died",
    "signal was weak",
    "cancelled on me"
  ];
  let when = ["this morning", "yesterday", "last night", "an hour ago"];

  console.log(who);
  console.log(action);
  console.log(when);
};

function generateExcuse() {
  let who = ["The dog", "My phone", "The wi-fi", "My friend"];
  let action = [
    "ate my homework",
    "battery died",
    "signal was weak",
    "cancelled on me"
  ];
  let when = ["this morning", "yesterday", "last night", "an hour ago"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${when[whenIndex]}`;
}

function displayExcuse() {
  let excuse = generateExcuse();
  document.getElementById("excuse").innerHTML = excuse;
}
window.onload = displayExcuse;
