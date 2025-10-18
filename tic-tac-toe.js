document.addEventListener('DOMContentLoaded', function() {
  var board = document.getElementById('board');
  if (!board) return;
  var cells = board.getElementsByTagName('div');
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add('square');
  }
});

