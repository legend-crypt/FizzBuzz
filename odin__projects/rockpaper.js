function computerPlay(){
    let randNum = Math.floor(Math.random() * 3);
    if(randNum == 1){
        return "Rock"
    }
    else if(randNum == 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}
console.log(computerPlay())

function playRounds(playerSelection, computerSelection){
 if(playerSelection =="Rock" && computerSelection == "Paper"){
     return"Player1 wins"
 }
 else if(computerSelection =="Rock" && playerSelection == "Paper"){
    return"computer wins"
}
else if(computerSelection =="Paper" && playerSelection == "Rock"){
    return "computer wins"
}
else if(playerSelection =="Paper" && computerSelection == "Paper"){
    return "player1 wins"
}
else if(computerSelection =="Scissor" && playerSelection == "Paper"){
    return "computer wins"
}
else if(playerSelection =="Scissor" && computerSelection == "Paper"){
    return "player1 wins"
}
else {
    return "Draw"
}

}
playerSelection = "Rock"
computerSelection = computerPlay()
console.log(playRounds(playerSelection, computerSelection))