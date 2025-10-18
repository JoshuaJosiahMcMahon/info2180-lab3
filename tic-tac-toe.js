document.addEventListener('DOMContentLoaded', function() {
  var board = document.getElementById('board');
  if (!board) return;
  var cells = board.getElementsByTagName('div');
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add('square');
  }

  var gameState = Array(cells.length).fill(null);
  var currentPlayer = 'X';
  var statusDiv = document.getElementById('status');
  var gameOver = false;

  function getWinner() {
    var combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (var k = 0; k < combos.length; k++) {
      var a = combos[k][0], b = combos[k][1], c = combos[k][2];
      var v = gameState[a];
      if (v && v === gameState[b] && v === gameState[c]) return v;
    }
    return null;
  }

  for (var j = 0; j < cells.length; j++) {
    (function(index) {
      cells[index].addEventListener('click', function() {
        if (gameOver || gameState[index] !== null) return;
        var player = currentPlayer;
        gameState[index] = player;
        this.textContent = player;
        this.classList.add(player);
        var winner = getWinner();
        if (winner) {
          if (statusDiv) {
            statusDiv.textContent = 'Congratulations! ' + winner + ' is the Winner!';
            statusDiv.classList.add('you-won');
          }
          gameOver = true;
          return;
        }
        currentPlayer = player === 'X' ? 'O' : 'X';
      });

      cells[index].addEventListener('mouseover', function() {
        this.classList.add('hover');
      });

      cells[index].addEventListener('mouseout', function() {
        this.classList.remove('hover');
      });
    })(j);
  }
});
