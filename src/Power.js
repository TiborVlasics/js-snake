let id = 0;

class Power {
    constructor(state, spawner) {
        this.state = state;
        this.spawner = spawner;
        this.id = id++;
        this.matrix = [
          ['2', '2'],
          ['2', '2']
        ]

        this._setPosition();
        this._despawn(spawner);
    }

    update() {
        const matrixBuffer = this.state.getBuffer();
        for (let y = 0; y < this.matrix.length; ++y) {
            for (let x = 0; x < this.matrix[y].length; ++x) {
                if (matrixBuffer[this.position.y + y][this.position.x + x] === '1') {
                    this.spawner.despawnPower(this.id);
                    this.state.player.hasConsumedPower = true;
                    this.state.setScore(1);
                    return;
                }
            }
        }
    }

    _despawn(spawner) {
        setTimeout(() => {
            spawner.despawnPower(this.id);
        }, 20000);
    }

    _setPosition() {
        const matrixBuffer = this.state.getBuffer();

        outer: while (true) {
            const position = {
                x: Math.floor(Math.random() * 40) * 2,
                y: Math.floor(Math.random() * 24) * 2
            };

            for (let y = 0; y < this.matrix.length; ++y) {
                for (let x = 0; x < this.matrix[y].length; ++x) {
                    if (matrixBuffer[position.y + y][position.x + x] !== 0) {
                        continue outer;
                    }
                }
            }
            this.position = position;
            break;
        }
    }
}
