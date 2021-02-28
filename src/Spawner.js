class Spawner {
    constructor() {
        this.spawnCounter = 0;
        this.spawnInterval = 5000;
        this.powers = [];
    }

    spawnPower(deltaTime, snake) {
        this.spawnCounter += deltaTime;
        if(this.spawnCounter > this.spawnInterval) {
          const power = new Power(snake, this.powers, this);
          this.powers = [...this.powers, power];
          this.spawnCounter = 0;
        }
    }

    despawnPower(id) {
        this.powers = this.powers.filter(p => p.id !==id);
    }
}
