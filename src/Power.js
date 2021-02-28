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

    _despawn(spawner) {
        setTimeout(() => {
            spawner.despawnPower(this.id);
        }, 10000);
    }

    _setPosition() {
        const matrixBuffer = this.state.getBuffer();

        outer: while (true) {
            const position = {
                x: Math.floor(Math.random() * 79),
                y: Math.floor(Math.random() * 47)
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
