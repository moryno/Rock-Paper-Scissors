let sign = ["Rock", "Paper", "Scissors"];

let randomNumber1 = Math.floor(Math.random()*3);
let randomNumber2 = Math.floor(Math.random()*3);
let playerOneSign = sign[randomNumber1];
let playerTwoSign = sign[randomNumber2];
let playerOneShape = "images/shape" + randomNumber1 + ".jpg";
let playerTwoShape = "images/shape" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[0].setAttribute("src", playerOneShape);
document.querySelectorAll("img")[1].setAttribute("src", playerTwoShape);


if(playerOneSign ==="Rock" && playerTwoSign==="Scissors"){
    $("h1").text("Player one wins!!");
}
else if(playerOneSign ==="Paper" && playerTwoSign === "Rock"){
    $("h1").text("Player one wins!!");
}
else if(playerOneSign === "Scissors" && playerTwoSign === "Paper"){
    $("h1").text("Player one wins!!");
}
else if(playerOneSign === playerTwoSign){
    $("h1").text("It's a draw!!");
}
else{
    $("h1").text("Player two wins!!");
}