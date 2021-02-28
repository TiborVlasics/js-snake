class State {
    constructor() {
        this.powers = [];
        this.arena = new Arena(80, 48);
        this.player = new Snake(this);
        this.spawner = new Spawner(this);
    }

    getBuffer() {
        let matrixBuffer = [];
        let height = 48;
        while (height--) {
            matrixBuffer.push(new Array(80).fill(0))
        }
        
        for (let y = 0; y <  this.player.matrix.length; ++y) {
            for (let x = 0; x < this.player.matrix[y].length; ++x) {
                matrixBuffer[y + this.player.position.y][x + this.player.position.x] = '1';
            }
        }

        this.powers.forEach(power => {
            for (let y = 0; y <  power.matrix.length; y++) {
                for (let x = 0; x < power.matrix[y].length; x++) {
                    matrixBuffer[y + power.position.y][x + power.position.x] = '2';
                }
            }
        })
        return matrixBuffer;
    }
}