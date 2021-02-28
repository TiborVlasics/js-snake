
let id = 0;

class Power {
    constructor(snake, powers) {
        this.id = id++;
        this.matrix = [
          ['2', '2'],
          ['2', '2']
        ]

        this.matrixBuffer = [];
        let height = 48;
        while (height--) {
            this.matrixBuffer.push(new Array(80).fill(0))
        }
        
        for (let y = 0; y <  snake.matrix.length; ++y) {
            for (let x = 0; x < snake.matrix[y].length; ++x) {
                this.matrixBuffer[y + snake.position.y][x + snake.position.x] = '1';
            }
        }

        powers.forEach(power => {
            for (let y = 0; y <  power.matrix.length; y++) {
                for (let x = 0; x < power.matrix[y].length; x++) {
                    this.matrixBuffer[y + power.position.y][x + power.position.x] = '1';
                }
            }
        })

        outer:
            while (true) {
                const position = { 
                    x: Math.floor(Math.random() * 79), 
                    y: Math.floor(Math.random() * 47) 
                };

                for (let y = 0; y < this.matrix.length; ++y) {
                    for (let x = 0; x < this.matrix[y].length; ++x) {
                        if (this.matrixBuffer[position.y + y][position.x + x] === '1') {
                            continue outer;
                            }
                        }
                }
                this.position = position;
                break;
            }
    }
}
