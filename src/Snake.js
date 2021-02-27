class Snake {
  constructor(element) {
    this.element = element;
    this.canvas = element.querySelector('canvas');

    this.context = this.canvas.getContext('2d');
    this.context.scale(10, 10);
    this.arena = new Arena(40, 24);
    this.player = new Player();

    this.colors = [
      "#000",
      "#ff0000",
      "#00ff00",
    ];

    this.draw();
  }

  draw() {
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this._drawMatrix(this.arena.matrix, { x: 0, y: 0 });
    this._drawMatrix(this.player.matrix, this.player.position);
  }

  _drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          this.context.fillStyle = this.colors[value];
          this.context.fillRect(x + offset.x, y + offset.y, 1, 1)
        }
      });
    });
  }
}