var pics_array =["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]


// document.querySelector("img #img1").setAttribute("src","pics_array[randomNumber1]");

function choose_pic(pics_id){
  var randomNumber1=Math.floor(Math.random()*6);
  document.getElementById(pics_id).src = pics_array[randomNumber1];

  return randomNumber1;
}

var num1 = choose_pic("img1");
var num2 = choose_pic("img2");

if(num1>num2){
  document.querySelector(".container h1").textContent ="🚩PLAYER 1 WINS";
}else if (num2>num1) {
  document.querySelector(".container h1").textContent ="PLAYER 2 WINS🚩";
}else {
  document.querySelector(".container h1").textContent ="🚩COME ON TRY AGAIN🚩";
}
