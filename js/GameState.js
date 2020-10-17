
const CNT = [5, 5, 4, 3, 2];

class GameState {
  constructor(board, size, player) {
    if (board == null) {
      this.initState(size);
    } else {
      this.size = board.length;
      this.board = board;
    }    
    this.player = player;
  }

  initState(size) {
    this.size = size;
    this.board = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.board[i] = new Array(this.size);
      for(let j = 0; j < this.size; j++) {
        this.board[i][j] = 0;
      }
    }
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < CNT[i]; j++) {
        this.board[i][j] = 1;
        this.board[this.size - i - 1][this.size - j - 1] = 2;
      }
    }
  }
}

//let testGame = new GameState(8);
//console.log(testGame.board);