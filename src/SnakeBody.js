class SnakeBody {
    constructor(position, state) {
      this.state = state;
        this.prevPosition;
        this.position = position;
        this.matrix = [
          ['3', '3'],
          ['3', '3']
        ]
        this.snakeBody = null;
        this.hasConsumedPower = false;
        state.snakeBodies.push(this);
    }

    setPosition(position) {
        this.prevPosition = { ...this.position };
        this.position = position;
    }

    update() {
      if(detectCollision(this.state.width, this.state.height, this, this.state.player)) {
        this.state.snakeTailCollisionNotifier.next(true);
      }

      if (this.hasConsumedPower) {
        this.hasConsumedPower = false;
        if (this.snakeBody) {
          this.snakeBody.hasConsumedPower = true;
          this.snakeBody.setPosition(this.prevPosition);
        } else {
          this.snakeBody = new SnakeBody(this.prevPosition, this.state);
        }
      } else if (this.snakeBody) {
      this.snakeBody.setPosition(this.prevPosition);
      }

      if(this.snakeBody) {
        this.snakeBody.update();
      }
    }
}