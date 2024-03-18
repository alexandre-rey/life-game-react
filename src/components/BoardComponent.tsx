import { useState } from "react";
import { Board } from "../game/Board";


function BoardComponent({ boardSize }: { boardSize: number }) {

    const [board, setBoard] = useState<Board>(new Board(boardSize));
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [currentInterval, setCurrentInterval] = useState<number | null>(null);

    if (board.getBoardSize() !== boardSize) {
        const newBoard = new Board(boardSize);
        setBoard(newBoard);
    }

    const handleStart = () => {
        setIsRunning(!isRunning);
        if (isRunning) {
            setIsRunning(false);
            if (currentInterval) {
                clearInterval(currentInterval);
            }
        } else {
            setIsRunning(true);
            setCurrentInterval(
                setInterval(() => {
                    board.nextTurn();
                    const newBoard = new Board(boardSize);
                    newBoard.setCells(board.getCells());
                    setBoard(newBoard);
                }, 500
                )
            );
        }
    };

    return (
        <div>
            <h1>Board</h1>

            <div className="menu">
                <button onClick={() => {
                    board.nextTurn();
                    const newBoard = new Board(boardSize);
                    newBoard.setCells(board.getCells());
                    setBoard(newBoard);
                }}>
                    Next Turn
                </button>

                <button
                    onClick={handleStart}
                >
                    {isRunning ? "Stop" : "Start"}
                </button>

                <button onClick={() => {
                    const newBoard = new Board(boardSize);
                    setBoard(newBoard);
                }}>
                    Clear
                </button>
            </div>


            <div className="board">
                {board.getCells().map((row, x) => {
                    return (
                        <div key={x} className="row">
                            {row.map((cell, y) => {
                                return (
                                    <div key={y} className={cell.isAlive() ? "cell alive" : "cell"} onClick={() => {
                                        const newBoard = new Board(boardSize);
                                        newBoard.setCells(board.getCells());
                                        newBoard.getCell(x, y).setAlive(!newBoard.getCell(x, y).isAlive());
                                        setBoard(newBoard);
                                    }}>
                                        {cell.isAlive() ? " " : " "}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )


}


export default BoardComponent;