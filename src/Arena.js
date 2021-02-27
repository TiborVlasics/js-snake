class Arena {

  constructor(w, h) {
    const matrix = [];
    while (h--) {
      matrix.push(new Array(w).fill(0))
    }
    this.matrix = matrix;
  }

  collide(player) {
    for (let y = 0; y <  player.matrix.length; ++y) {
      for (let x = 0; x < player.matrix[y].length; ++x) {
        if (player.matrix[y][x] !== 0 &&
          (this.matrix[y + player.position.y] && 
          this.matrix[y + player.position.y][x + player.position.x]) !== 0) {
            return true;
          }
      }
    }
    return false;
  }
}