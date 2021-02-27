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
        --this.position.y;
        break;
      default:
    }
    this.moveCounter = 0;
  }
}