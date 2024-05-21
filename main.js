var array = [
  "https://etc.usf.edu/clipart/42100/42158/die_01_42158_lg.gif",
  "https://etc.usf.edu/clipart/42100/42159/die_02_42159_sm.gif",
  "https://etc.usf.edu/clipart/42100/42160/die_03_42160_lg.gif",
  "https://etc.usf.edu/clipart/42100/42161/die_04_42161_sm.gif",
  "https://etc.usf.edu/clipart/42100/42162/die_05_42162_lg.gif",
  "https://etc.usf.edu/clipart/42100/42164/die_06_42164_lg.gif",
];

var img = document.getElementById("img");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var img2 = document.getElementById("img2");

var score1 = 0;
btn.onclick = function () {
  var index = Math.floor(Math.random() * 6);
  var player1score = index + 1;
  img.src = array[index];
  document.getElementById("btn").disabled = true;
  document.getElementById("btn2").disabled = false;
  score1 += player1score;
  if (score1 >= 20) {
    document.getElementById("container-g").style.visibility = "hidden";
    document.getElementById("win").style.visibility = "visible";
    document.getElementById("win").innerHTML = "Player 1 Wins 🙋";
  }
  document.getElementById("player1").innerHTML = "Player 1 Score: " + score1;
};

var score2 = 0;
btn2.onclick = function () {
  var index2 = Math.floor(Math.random() * 6);
  var player2score = index2 + 1;
  img2.src = array[index2];
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn").disabled = false;
  var player2score = index2 + 1;
  score2 += player2score;
  if (score2 >= 20) {
    document.getElementById("container-g").style.visibility = "hidden";
    document.getElementById("win").style.visibility = "visible";
    document.getElementById("win").innerHTML = "Player 2 Wins 🙋";
  }
  document.getElementById("player2").innerHTML = "Player 2 Score: " + score2;
};
