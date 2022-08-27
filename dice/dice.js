var randomDicePlayerOne = Math.floor((Math.random() * 6) + 1);
var randomDicePlayerTwo = Math.floor((Math.random() * 6) + 1);

//Player One Dice Replacement
if (randomDicePlayerOne === 1) {
    document.getElementsByClassName("player1Dice1")[0].src = "dice1.png";
}

if (randomDicePlayerOne === 2) {
    document.getElementsByClassName("player1Dice1")[0].src = "dice2.png";
}

if (randomDicePlayerOne === 3) {
    document.getElementsByClassName("player1Dice1")[0].src = "dice3.png";
}

if (randomDicePlayerOne === 4) {
    document.getElementsByClassName("player1Dice1")[0].src = "dice4.png";
}

if (randomDicePlayerOne === 5) {
    document.getElementsByClassName("player1Dice1")[0].src = "dice5.png";
}

if (randomDicePlayerOne === 6) {
    document.getElementsByClassName("player1Dice1")[0].src = "dice6.png";
}

//Player Two Dice Replacement
if (randomDicePlayerTwo === 1) {
    document.getElementsByClassName("player2Dice1")[0].src = "dice1.png";
}

if (randomDicePlayerTwo === 2) {
    document.getElementsByClassName("player2Dice1")[0].src = "dice2.png";
}

if (randomDicePlayerTwo === 3) {
    document.getElementsByClassName("player2Dice1")[0].src = "dice3.png";
}

if (randomDicePlayerTwo === 4) {
    document.getElementsByClassName("player2Dice1")[0].src = "dice4.png";
}

if (randomDicePlayerTwo === 5) {
    document.getElementsByClassName("player2Dice1")[0].src = "dice5.png";
}

if (randomDicePlayerTwo === 6) {
    document.getElementsByClassName("player2Dice1")[0].src = "dice6.png";
}


//Winning Stastment

if (randomDicePlayerOne === randomDicePlayerTwo) {
    document.querySelector("#h1").innerHTML = "Draw Both Player !!";
}

if (randomDicePlayerOne > randomDicePlayerTwo) {
    document.querySelector("#h1").innerHTML = "Player 1 WIN...";
}

if (randomDicePlayerOne < randomDicePlayerTwo) {
    document.querySelector("#h1").innerHTML = "Player 2 WIN...";
}