import { useState } from 'react';
import './App.css'
import Board from './components/BoardComponent'

function App() {

  const [boardSize, setBoardSize] = useState<number>(20);

  const handleBoardSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
    setBoardSize(newSize);
  }

  return (
    <>
      <input type="number" value={boardSize} onChange={handleBoardSizeChange} />
      <Board boardSize={boardSize} />
    </>
  )
}

export default App
