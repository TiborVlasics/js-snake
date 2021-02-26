class Snake {
  constructor(element) {
    this.element = element;
    this.canvas = element.querySelector('canvas');

    this.context = this.canvas.getContext('2d');
    this.context.scale(10, 10);
    this.arena = new Arena(40, 24);
    this.player = new Player();
    this.draw();
  }

  draw() {
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}