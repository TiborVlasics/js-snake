class Spawner {
    constructor(state) {
        this.state = state;
        this.powers = state.powers;
        this.player = state.player;
        this.spawnCounter = 0;
        this.spawnInterval = 5000;
    }

    spawnPower(deltaTime, snake) {
        this.spawnCounter += deltaTime;
        if(this.spawnCounter > this.spawnInterval) {
          const power = new Power(this.state, this);
          this.state.powers = [...this.state.powers, power];
          this.spawnCounter = 0;
        }
    }

    despawnPower(id) {
        this.state.powers = this.state.powers.filter(p => p.id !==id);
    }
}
