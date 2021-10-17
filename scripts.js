let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
let nextPlayerLbl = document.getElementById('next-lbl');
nextPlayerLbl.innerText = "" + nextPlayer; //x or o

//initialize the game
// use the value stored in the nextPlayer variable to indicate who the next player is
//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard(){
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.getElementsByTagName('td');

    for (let i = 0; i < cells.length; i++){ //every cell, it will append a button with text
        let btn = document.createElement('button');
        btn.innerText = "[ ]"; //square brackets with empty space
        cells[i].appendChild(btn);
    }

}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event){
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    event.target.innerText = "[" + nextPlayer + "]";
    event.target.disabled = true;    // this makes button only clickable once

    if(nextPlayer == 'X'){
        nextPlayer = 'O';
    }
    else{
        nextPlayer = 'X';
    }
    nextPlayerLbl.innerText = "" + nextPlayer;


    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let text = document.createTextNode("Game Over!");
        let h1 = document.createElement("h1");
        h1.appendChild(text);
        let gameOverLabel = document.getElementsById('game-over-lbl');
        gameOverLabel.appendChild(h1);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let disabled = 0; //counts the amount of buttons that have been presesd
    for (let i = 0; i < btns.length; i++){
        if (btns[i].disabled){
            disabled++; //keeps count of how many of the buttons have been pressed, when all buttons are pressed, it will return true
        }
    }
    if (disabled == 9){
        nextPlayerLbl.innerText = "GAME OVER!" //this is just to test if the game over function works
        return true; //returns true when all buttons have been pressed
    }
    return false
}
