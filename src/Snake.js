class Snake {
  constructor(element) {
    this.element = element;
    this.canvas = element.querySelector('canvas');

    this.context = this.canvas.getContext('2d');
    this.context.scale(5, 5);
    this.arena = new Arena(80, 48);
    this.player = new Player();

    this.colors = [
      "#000",
      "#ff0000",
      "#00ff00",
    ];

    let lastTime = 0;
    const update = (time = 0) => {
        const deltaTime = time - lastTime;
        lastTime = time;
        
        this.player.update(deltaTime);
        this.draw();
        requestAnimationFrame(update);
    }
    update();
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