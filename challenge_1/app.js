var board = [['','',''],['','',''],['','','']];

var currentPlayer = 'X';
var winningBoard = false;

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
      resetBoard();
    }, 100);
  }
  
}

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

const resetBoard = () => {
  winningBoard = false;
  board = [['','',''],['','',''],['','','']];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var idName = i.toString() + j.toString();
      document.getElementById(idName).innerHTML = '';
    }
  }
}

//var board = [['O','O','X'],['O','X','O'],['X','O','O']];

///////////////////////////
// DOM MANIPULATION
///////////////////////////


document.addEventListener('click', (event) => {
  
  if (event.target.className === 'square') {
    var location = event.target.id;
    if (checkValidityOfMoveAndPlacePiece(location)) {
      event.target.innerHTML = currentPlayer;
      if(!winningBoard) {
        currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
        document.getElementById('your-move').innerHTML = 'It\'s your move, ' + currentPlayer + '!';
      }
    }
  }
  
  // if (event.target.className = 'reset') {
  //   resetBoard();
  // }
  
});


/*
    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },
*/