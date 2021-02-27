class Player {
  constructor() {
    this.moveCounter = 0;
    this.moveInterval = 300;
    
    this.direction = ['n', 's', 'e', 'w'][Math.floor(Math.random() * 4)]
  
    this.position = { x: 0, y: 0 };
    this.matrix = [
      ['1', '1'],
      ['1', '1']
    ]

    document.addEventListener('keydown', this._keyDownListener);
  }

  update(deltaTime) {
    this.moveCounter += deltaTime;
    if(this.moveCounter > this.moveInterval) {
      this._move();
    }
  }

  _move() {
    switch(this.direction) {
      case 'n':
        --this.position.y;
        break;
      case 's':
        ++this.position.y;
        break;
      case 'e':
        ++this.position.x;
        break;
      case 'w':
        --this.position.x;
        break;
      default:
    }
    this.moveCounter = 0;
  }

  _keyDownListener = (e) => [87, 65, 83, 68].forEach(val => {
    switch(e.keyCode) {
      case 87:
        if (this.direction !== 's') {
          this.direction = 'n';
        }
        break;
      case 65:
        if (this.direction !== 'e') {
          this.direction = 'w';
        }
        break;
      case 83:
        if (this.direction !== 'n') {
          this.direction = 's';
        }
        break;
      case 68:
        if (this.direction !== 'w') {
          this.direction = 'e';
        }
        break;
      default:
    }
});
}