class Snake {
  constructor(game) {
    this.moveCounter = 0;
    this.moveInterval = 300;
    this.arena = game.arena;
    
    this.requestedDirection;
    this.direction = ['n', 's', 'e', 'w'][Math.floor(Math.random() * 4)]
  
    this.position = { x: 40, y: 22 };
    this.matrix = [
      ['1', '1'],
      ['1', '1']
    ]

    this.hasConsumedPower = false;
    this.snakeBody = null;

    document.addEventListener('keydown', this._keyDownListener);
  }

  update(deltaTime) {
    this.moveCounter += deltaTime;
    if(this.moveCounter > this.moveInterval) {
      this._move();
    }
  }

  _move() {
    this._changeDirection();
    const prevPosition = { ...this.position };
  
    switch(this.direction) {
      case 'n':
        this.position.y -= 2;
        break;
      case 's':
        this.position.y +=2;
        break;
      case 'e':
        this.position.x +=2;
        break;
      case 'w':
        this.position.x -=2;
        break;
      default:
    }

    if(this.arena.collide(this)) {
      switch(this.direction) {
        case 'n':
          this.position.y +=2;
          break;
        case 's':
          this.position.y -=2;
          break;
        case 'e':
          this.position.x -=2;
          break;
        case 'w':
          this.position.x +=2;
          break;
        default:
      }
    }

    this._handleBodyMovement(prevPosition);

    this.moveCounter = 0;
  }

  _keyDownListener = (e) => [87, 65, 83, 68].forEach(val => {
    switch(e.keyCode) {
      case 87:
          this.requestedDirection = 'n';
        break;
      case 65:
          this.requestedDirection = 'w';
        break;
      case 83:
          this.requestedDirection = 's';
        break;
      case 68:
          this.requestedDirection = 'e';
        break;
      default:
    }
  });

  _handleBodyMovement(prevPosition) {
    if (this.hasConsumedPower) {
      this.hasConsumedPower = false;
      if (this.snakeBody) {
        this.snakeBody.hasConsumedPower = true;
        this.snakeBody.setPosition(prevPosition);
      } else {
        this.snakeBody = new SnakeBody(prevPosition);
      }
    } else if (this.snakeBody) {
      this.snakeBody.setPosition(prevPosition);
    }
    if (this.snakeBody) {
      this.snakeBody.update();
    }
  }

  _changeDirection() {
    if (this.requestedDirection === 'n' && this.direction !== 's') {
      this.direction = 'n';
    } else if (this.requestedDirection === 's' && this.direction !== 'n') {
      this.direction = 's';
    } else if (this.requestedDirection === 'w' && this.direction !== 'e') {
      this.direction = 'w';
    } else if (this.requestedDirection === 'e' && this.direction !== 'w') {
      this.direction = 'e';
    }
  }
}