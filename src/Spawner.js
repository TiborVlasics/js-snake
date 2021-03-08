class Spawner {
    constructor(state) {
        this.state = state;
        this.powers = state.powers;
        this.player = state.player;
        this.spawnCounter = 0;
        this.spawnInterval = 12000;
        this.moveCounter = 0;
        this.moveInterval = 300;
    }

    update(deltaTime, snake) {
        this.spawnCounter += deltaTime;
        this.moveCounter += deltaTime;

        if(this.spawnCounter > this.spawnInterval) {
          const power = new Power(this.state, this);
          this.state.powers = [...this.state.powers, power];
          this.spawnCounter = 0;
        }
        if(this.moveCounter > this.moveInterval) {
            this.moveCounter = 0;
            this.state.powers.forEach(element => {
                element.update();
            });
        }
    }

    despawnPower(id) {
        this.state.powers = this.state.powers.filter(p => p.id !==id);
    }
}
