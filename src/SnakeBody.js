class SnakeBody {
    constructor(position) {
        this.prevPosition;
        this.position = position;
        this.matrix = [
          ['1', '1'],
          ['1', '1']
        ]
        this.snakeBody = null;
        this.hasConsumedPower = false;
    }

    setPosition(position) {
        this.prevPosition = { ...this.position };
        this.position = position;
    }

    update() {
        if (this.hasConsumedPower) {
            this.hasConsumedPower = false;
            if (this.snakeBody) {
              this.snakeBody.hasConsumedPower = true;
              this.snakeBody.setPosition(this.prevPosition);
            } else {
              this.snakeBody = new SnakeBody(this.prevPosition);
            }
        } else if(this.snakeBody) {
        this.snakeBody.setPosition(this.prevPosition);
        }
        if(this.snakeBody) {
        this.snakeBody.update();
        }
    }
}