import { Cell } from "./Cell";


export class Board {

    private boardSize:number;
    private cells:Cell[][];

    constructor(boardSize:number) {
        this.boardSize = boardSize;

        this.cells = [];

        for (let x = 0; x < this.boardSize; x++) {
            this.cells[x] = [];
            for (let y = 0; y < this.boardSize; y++) {
                this.cells[x][y] = new Cell(x, y, false);
            }
        }
    }

    public getCells():Cell[][] {
        return this.cells;
    }

    setCells(cells: Cell[][]) {
        this.cells = cells;
    }

    public getCell(x:number, y:number):Cell {
        return this.cells[x][y];
    }

    public setCell(x:number, y:number, alive:boolean):void {
        this.cells[x][y].setAlive(alive);
    }

    public getBoardSize():number {
        return this.boardSize;
    }

    public nextTurn():void {
        for (let x = 0; x < this.boardSize; x++) {
            for (let y = 0; y < this.boardSize; y++) {
                this.cells[x][y].setAliveNextTurn(this.isAliveNextTurn(x, y));
            }
        }

        for (let x = 0; x < this.boardSize; x++) {
            for (let y = 0; y < this.boardSize; y++) {
                this.cells[x][y].setAlive(this.cells[x][y].isAliveNextTurn());
            }
        }
    }

    private isAliveNextTurn(x:number, y:number):boolean {
        let aliveNeighbours = this.countAliveNeighbours(x, y);

        if (this.cells[x][y].isAlive()) {
            return aliveNeighbours === 2 || aliveNeighbours === 3;
        } else {
            return aliveNeighbours === 3;
        }
    }

    private countAliveNeighbours(x:number, y:number):number {
        let aliveNeighbours = 0;

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) {
                    continue;
                }

                console.log(this.cells[x + i] && this.cells[x + i][y + j] && this.cells[x + i][y + j].isAlive());
                if (this.cells[x + i] && this.cells[x + i][y + j] && this.cells[x + i][y + j].isAlive()) {
                    aliveNeighbours++;
                }
            }
        }

        return aliveNeighbours;
    }


}