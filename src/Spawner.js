class Spawner {
    constructor() {
        this.spawnCounter = 0;
        this.spawnInterval = 500;
        this.powers = [];
    }

    spawnPower(deltaTime, snake) {
        this.spawnCounter += deltaTime;
        if(this.spawnCounter > this.spawnInterval) {
          const power = new Power(snake, this.powers);
          this.powers.push(power);
          this.spawnCounter = 0;
        }
    }

}