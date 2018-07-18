const prompt = require('prompt');
const readline = require('readline')

prompt.start();

console.log('input the coordinates for your move');
console.log('ex: row: 0 , col: 1');
let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

const checkRows = (board) => {
  for (let i = 0; i < 3; i++) {
    if (board[i].reduce((a, b) => a + b) === "OOO") {
      console.log('O WINS');
      return true
    }
  }
  return false;
};

const startGame = (board, player) => {
  let piece = player ? 'X' : 'O';

  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
  if (checkRows(board)) {
    return;
  }
  

  prompt.get(['row', 'col'], (err, result) => {
    if (!['0', '1', '2'].includes(result.row) || !['0', '1', '2'].includes(result.col)) {
      console.log('please make sure row and col are numbers between 0 and 2')
      startGame(board, player);
      return;
    }

    board[result.row][result.col] = piece;
    startGame(board, !player);
  })
}

startGame(board, true);

