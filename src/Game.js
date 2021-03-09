const { filter, take, delay, tap } = rxjs.operators;

class Game {
  constructor(element) {
    this.element = element;
    this.canvas = element.querySelector('canvas');

    this.context = this.canvas.getContext('2d');
    this.context.scale(5, 5);
    this.state = new State();
    this.snake_speed = 4;

    this.colors = [
      "#000",
      "#00FF00",
      "#FF0000",
    ];

    let animationFrame;
    let lastTime = 0;
    const update = (currentTime = 0) => {
        animationFrame = requestAnimationFrame(update);
        const deltaTime = (currentTime - lastTime) / 1000;

        if(deltaTime < 1 / this.snake_speed) {
          return;
        }
        
        lastTime = currentTime;
        this.state.player.update(deltaTime);
        this.state.spawner.update(deltaTime)
        this.draw();
    }
    this.draw();
    update();

    this.state.getScore$().subscribe(() => this.snake_speed += 0.1);
    this.state.snakeTailCollisionNotifier.pipe(
      filter(result => result === true),
      take(1),
      tap(() => cancelAnimationFrame(animationFrame)),
      delay(1000)
    ).subscribe(() => {
      this.showGameOverText();
    });
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

  showGameOverText() {
    console.log(this.context)
    this.context.font = "10px Arial";
    this.context.fillStyle = "red";
    this.context.textAlign = "center";
    this.context.fillText("GAME OVER", 40, 20);
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