//Generating random numbers
var dice1 = randomNumber();
var dice2 = randomNumber();

// Integer to string
dice1=dice1.toString();
dice2=dice2.toString();

//img path string to var x
var x = document.querySelector(".img1").getAttribute("src");
var fileName1 = x.slice(0,11);
var fileName2 = x.slice(0,11);
var fileNameEnd = x.slice(12,x.length);
//based on random numer, the new image is set to each player
document.querySelector(".img1").setAttribute("src",fileName1.concat(dice1,fileNameEnd));
document.querySelector(".img2").setAttribute("src",fileName2.concat(dice2,fileNameEnd));

if (dice1>dice2)
{
  document.querySelector("h1").innerHTML=("<span style='font-size:80px;'>&#127937;</span> Player 1 Wins! ");
}
else if (dice1<dice2) {
    document.querySelector("h1").innerHTML=("Player 2 Wins! <span style='font-size:80px;'>&#127937;</span>");
  }
  else
  {
    document.querySelector("h1").textContent=("Draw! ");
  }


// <span style='font-size:100px;'>&#127937;</span>

//Generating random numbers function
function randomNumber() {
  var n= Math.floor(Math.random()*6 +1);
  return n;
}
