class Game {
  constructor(element) {
    this.element = element;
    this.canvas = element.querySelector('canvas');

    this.context = this.canvas.getContext('2d');
    this.context.scale(5, 5);
    this.state = new State();

    this.colors = [
      "#000",
      "#00FF00",
      "#FF0000",
    ];

    let lastTime = 0;
    const update = (time = 0) => {
        const deltaTime = time - lastTime;
        lastTime = time;
        
        this.state.player.update(deltaTime);
        this.state.spawner.update(deltaTime,)
        this.draw();
        requestAnimationFrame(update);
    }
    update();
  }

  draw() {
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this._drawMatrix(this.state.arena.matrix, { x: 0, y: 0 });
    this._drawMatrix(this.state.player.matrix, this.state.player.position);
    let body = this.state.player.snakeBody;
    while (body) {
      this._drawMatrix(body.matrix, body.position);
      body = body.snakeBody;
    }
    this.state.powers.forEach(element => {
      this._drawMatrix(element.matrix, element.position);
    });
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