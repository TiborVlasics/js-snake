class Spawner {
    constructor(state) {
        this.state = state;
        this.powers = state.powers;
        this.player = state.player;
        this.ticks = 0;
    }

    update() {
        this.ticks ++;

        if(this.ticks == 10) {
          const power = new Power(this.state, this);
          this.state.powers = [...this.state.powers, power];
          this.ticks = 0;
        }
        this.state.powers.forEach(element => {
            element.update();
        });
    }

    despawnPower(id) {
        this.state.powers = this.state.powers.filter(p => p.id !==id);
    }
}
