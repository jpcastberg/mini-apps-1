var board = [['','',''],['','',''],['','','']];

var currentPlayer = 'X';
var winningBoard = false;
var moveCount = 0;

var XName = 'X';
var OName = 'O';

var XWins = 0;
var OWins = 0;

///////////////////////////
// WIN CHECKERS
///////////////////////////

const horizontalWinChecker = (row) => {
  var pieces = 0;
  for (var i = 0; i < board[row].length; i++) {
    if (board[row][i] === currentPlayer) {
      pieces++;
      if (pieces === 3) {
        winningBoard = true;
      }
    }
  }
}

const verticalWinChecker = (col) => {
  var pieces = 0;
  for (var i = 0; i < board.length; i++) {
    if(board[i][col] === currentPlayer) {
      pieces++;
      if (pieces === 3) {
        winningBoard = true;
      }
    }
  }
}

const diagonalWinChecker = () => {
  var pieces = 0;
  //MAJOR DIAGONAL
  for (var i = 0; i < board.length; i++) {
    if(board[i][i] === currentPlayer) {
      pieces++;
      if (pieces === 3) {
        winningBoard = true;
        return;
      }
    }
  }
  //MINOR DIAGONAL
  pieces = 0;
  for (i = 0; i < board.length; i++) {
    var j = ((board.length - 1) - i)
    if(board[i][j] === currentPlayer) {
      pieces++;
      if (pieces === 3) {
        winningBoard = true;
      }
    }
  }
}

const checkForWin = (row, col) => {
 
  horizontalWinChecker(row);
  verticalWinChecker(col);
  diagonalWinChecker();
  
  if (winningBoard) {
    setTimeout(() => {
      alert(currentPlayer + ' wins!');
      currentPlayer === 'X' ? XWins++ : OWins++;
      document.getElementById('x-wins').innerHTML = 'X Wins: ' + XWins;
      document.getElementById('o-wins').innerHTML = 'O Wins: ' + OWins;
      resetBoard(currentPlayer);
    }, 100);
  }
  
}

///////////////////////////
// HELPERS
///////////////////////////

const checkValidityOfMoveAndPlacePiece = (location) => {
  var row = parseInt(location[0]);
  var col = parseInt(location[1]);
  
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    checkForWin(row, col);
    return true;
  } else {
    return false;
  }
}

const resetBoard = (winner) => {
  winningBoard = false;
  currentPlayer = winner || 'X';
  moveCount = 0;
  board = [['','',''],['','',''],['','','']];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var idName = i.toString() + j.toString();
      document.getElementById(idName).innerHTML = '';
    }
  }
  document.getElementById('your-move').innerHTML = 'It\'s your move, ' + currentPlayer + '!'; ;
}

///////////////////////////
// EVENT HANDLERS
///////////////////////////


document.addEventListener('click', (event) => {
  
  if (event.target.className === 'square') {
    var location = event.target.id;
    if (checkValidityOfMoveAndPlacePiece(location)) {
      event.target.innerHTML = currentPlayer;
      moveCount++;
      if (!winningBoard) {
        //HANDLE DRAW
        if (moveCount === 9) {
          setTimeout(() => {
            alert('It\'s a draw!')
            resetBoard();
          }, 100);
        } else {
          currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
          document.getElementById('your-move').innerHTML = 'It\'s your move, ' + currentPlayer + '!'; 
        }
      }
    }
  }
  
  if (event.target.id === 'reset') {
    resetBoard();
  }
  
});