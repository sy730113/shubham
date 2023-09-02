var randomNumber1=Math.random();
randomNumber1=randomNumber1*5;
randomNumber1=Math.round(randomNumber1+1);

var randomNumberDice="dice" + randomNumber1;
var randomImageSource="./images/" + randomNumberDice + ".png"
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*5;
randomNumber2=Math.round(randomNumber2+1);

var randomNumberDice2="dice" + randomNumber2;
var randomImageSource2="./images/" + randomNumberDice2 + ".png"
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2)
{
document.querySelector("h1").innerHTML="🏆 player 1 Wins";
}
else if(randomNumber2>randomNumber1)
{
   document.querySelector("h1").innerHTML="Player 2 Wins 🏆 ";
}
else{
   document.querySelector("h1").innerHTML="Draw!";
}