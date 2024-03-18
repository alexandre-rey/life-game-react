

export class Cell {
    private x:number;
    private y:number;
    private alive:boolean;
    private aliveNextTurn:boolean;

    constructor(x:number, y:number, alive:boolean) {
        this.x = x;
        this.y = y;
        this.alive = alive;
        this.aliveNextTurn = false;
    }

    public getX():number {
        return this.x;
    }

    public getY():number {
        return this.y;
    }

    public isAlive():boolean {
        return this.alive;
    }

    public setAlive(alive:boolean):void {
        this.alive = alive;
    }

    public isAliveNextTurn():boolean {
        return this.aliveNextTurn;
    }

    public setAliveNextTurn(aliveNextTurn:boolean):void {
        this.aliveNextTurn = aliveNextTurn;
    }
}