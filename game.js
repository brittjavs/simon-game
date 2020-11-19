let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []
let level = 0
let started = false;

function nextSequence(){
    userClickedPattern = []
    level++
    $("#level-title").text("Level " + level)
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).animate({opacity: '0.5'}, 300);
    $("#" + randomChosenColour).animate({opacity: '1'});
    playSound(randomChosenColour)

   }

$(".btn").click(function(){
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    animatePress(userChosenColor)
    playSound(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
    
})

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    }, 100)
}

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level)
        nextSequence()
        started = true
    }
})

function checkAnswer(currentLevel){
 if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
     if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
            nextSequence()
        }, 1000)
     }
 }
 else{
     console.log("wrong")
 }
}