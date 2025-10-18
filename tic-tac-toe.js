document.addEventListener('DOMContentLoaded', function() {
  var board = document.getElementById('board');
  if (!board) return;
  var cells = board.getElementsByTagName('div');
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add('square');
  }

  var gameState = Array(cells.length).fill(null);
  var currentPlayer = 'X';

  for (var j = 0; j < cells.length; j++) {
    (function(index) {
      cells[index].addEventListener('click', function() {
        if (gameState[index] !== null) return;
        gameState[index] = currentPlayer;
        this.textContent = currentPlayer;
        this.classList.add(currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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
