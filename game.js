let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []
function nextSequence(){
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