const { Observable, BehaviorSubject, from, asObservable } = rxjs;

class State {
    scoreElement = document.querySelector('.score>span')

    constructor() {
        this.score = new BehaviorSubject(0);
        this.powers = [];
        this.arena = new Arena(80, 48);
        this.player = new Snake(this);
        this.snakeBodies = [];
        this.spawner = new Spawner(this);
        this.scoreElement.innerHTML = this.score._value;
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

        this.snakeBodies.forEach(body => {
            for (let y = 0; y <  body.matrix.length; y++) {
                for (let x = 0; x < body.matrix[y].length; x++) {
                        matrixBuffer[y + body.position.y][x + body.position.x] = '3';
                }
            }
        })

        this.powers.forEach(power => {
            for (let y = 0; y <  power.matrix.length; y++) {
                for (let x = 0; x < power.matrix[y].length; x++) {
                    if(matrixBuffer[y + power.position.y][x + power.position.x] !== '1') {
                        matrixBuffer[y + power.position.y][x + power.position.x] = '2';
                    }
                }
            }
        })
        return matrixBuffer;
    }

    setScore(amount) {
        this.score.next(this.score._value + amount);
        this.scoreElement.innerHTML = this.score._value;
    }

    getScore$() {
        return this.score.asObservable();
    }
}