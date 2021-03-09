function detectCollision(w, h, obj1, obj2) {
  const matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0))
  }

  for (let y = 0; y <  obj1.matrix.length; ++y) {
      for (let x = 0; x < obj1.matrix[y].length; ++x) {
        matrix[y + obj1.position.y][x + obj1.position.x] = 1;
      }
    }

    for (let y = 0; y <  obj2.matrix.length; ++y) {
      for (let x = 0; x < obj2.matrix[y].length; ++x) {
        if(matrix[y + obj2.position.y][x + obj2.position.x] == 1) {
          return true;
        }
      }
    }
    return false;
}
