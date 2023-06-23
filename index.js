// Select the dice images
const diceImages = document.querySelectorAll('.dice img');

// Generate random numbers between 1 and 6 for each dice
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Update the dice images
diceImages[0].src = `images/dice${randomNumber1}.png`;
diceImages[1].src = `images/dice${randomNumber2}.png`;



// CHANGING TITLE

// Select the h1 element
const title = document.querySelector('#title');

var randomTitle;

if (randomNumber1 > randomNumber2) {
    randomTitle = '🚩 Player 1 Wins!';
}else if (randomNumber1 < randomNumber2) {
    randomTitle = 'Player 2 Wins! 🚩';
}else {
    randomTitle = 'Draw!';
}


// Change the text in the h1 element
title.innerHTML = randomTitle;