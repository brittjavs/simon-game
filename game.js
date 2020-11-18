let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
function nextSequence(){
   let randomNumber = Math.floor(Math.random() * 4)
   let randomChosenColour = buttonColours[randomNumber]
   gamePattern.push(randomChosenColour)
   $("#" + randomChosenColour).animate({opacity: '0.5'}, 300);
   $("#" + randomChosenColour).animate({opacity: '1'});
   let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play();
}

