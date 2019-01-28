const board = [[,,],[,,],[,,]];

var currentPlayer = 'X';
var winningBoard = false;

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
  winningBoard = false; // REMOVE AFTER TESTING
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
var board = [['O','O','X'],['O','X','O'],['X','O','O']];

document.getElementsByTagName('body').addEventListener('click', (event) => {
  //click handler
});


/*
    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },
*/