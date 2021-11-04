let sign = ["rock", "paper", "scissors"];
let gamePattern = [];
let playerPattern = [];

$(".btn").on("click", function(){
    let playerChosenSign = $(this).attr("id");
    playerPattern.push(playerChosenSign);
    let playerShape = "images/" + playerChosenSign + ".jpg";
    $(".player-img").attr("src", playerShape );
    $("p").hide();
   
    
    nextHand();
    checkAnswer(playerPattern.length-1);
})



function checkAnswer(currentSign){
    if(playerPattern[currentSign] ==="rock" && gamePattern[currentSign] ==="scissors"){
        $("h1").text("Player one wins!!");
        playSound("user");
    }
    else if(playerPattern[currentSign] ==="paper" && gamePattern[currentSign] === "rock"){
        $("h1").text("Player one wins!!");
        playSound("user");
    }
    else if(playerPattern[currentSign] === "scissors" && gamePattern[currentSign] === "paper"){
        $("h1").text("Player one wins!!");
        playSound("user");
    }
    else if(playerPattern[currentSign] === gamePattern[currentSign]){
        $("h1").text("It's a draw!!");
        playSound("draw");
    }
    else{
        $("h1").text("Player two wins!!");
        playSound("game");
    }
}

function nextHand(){
    let randomNumber = Math.floor(Math.random()*3);
    let randomChosenSign = sign[randomNumber];
    let gameShape = "images/shape" + randomNumber + ".jpg";
    $(".game-img").attr("src", gameShape);
    gamePattern.push(randomChosenSign);

}


function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

