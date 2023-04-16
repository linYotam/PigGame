'use strict';

const player1 = { id: 1, current: 0, points: 0 };
const player2 = { id: 2, current: 0, points: 0 };
let currentPlayer1 = true;

// Dice Image
const dice = document.querySelector('.dice');

// Hold Btn
const hold = document
  .querySelector('.btn--hold')
  .addEventListener('click', changePlayer);

//Roll Dice Btn
const rollDiceBtn = document
  .querySelector('.btn--roll')
  .addEventListener('click', rollDice);

// Update current point of current player
function setCurrent(roll, player) {
  if (roll === 1) {
    player.current = 0;
  } else {
    player.current = player.current + roll;
  }

  document.querySelector(`#current--${player.id}`).textContent = player.current;
}

//Roll a new dice
function rollDice() {
  const newRoll = Math.ceil(Math.random(1, 6) * 6);
  dice.src = `dice-${newRoll}.png`;
  currentPlayer1 ? setCurrent(newRoll, player1) : setCurrent(newRoll, player2);
}

//Change player
function changePlayer() {
  updateScore();
  currentPlayer1 = !currentPlayer1;
}
