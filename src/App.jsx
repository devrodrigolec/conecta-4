import "./App.css";
import { checkWinner, findIndexOfBoard } from "./logic";
import { Square, Circle, WinnerModal } from "./components";
import { TURNS, COLUMNS, sqVoids } from "./constants";
import { useState } from "react";
import { usePosition, useEventMove } from "./hooks";




function App() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(TURNS.red);
  const [winner, setWinner] = useState(null);
  const { position, handleMove } = usePosition();
  const {setEnabled} = useEventMove({handleMove})

  const restartGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(TURNS.red);
    setWinner(null);
    setEnabled(true);
  };

  const updateBoard = (indexOfColumn) => {
    if (winner) return;
    const newBoard = [...board];
    const newTurn = turn === TURNS.red ? TURNS.green : TURNS.red;
    const column = COLUMNS[indexOfColumn];
    const indexOfBoard = findIndexOfBoard(column, newBoard);
    newBoard[indexOfBoard] = turn;
    setBoard(newBoard);
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      setEnabled(false);
      document.body.classList.remove("no-cursor");
    }
  };

 
  return (
    <>
      {winner && <WinnerModal restartGame={restartGame} winner={winner} />}
      {!winner && board.every((element) => element != null) && (
        <WinnerModal restartGame={restartGame} />
      )}
      <header>
        <h1>Conecta 4</h1>
        <div className="sq-voids">
          {sqVoids.map((sq, index) => {
            return (
              <Square
                updateBoard={updateBoard}
                indexOfColumn={index}
                key={index}
              >
                <Circle hover={turn}></Circle>
              </Square>
            );
          })}
        </div>
      </header>
      <main>
        {board.map((sq, index) => {
          return (
            <Square key={index} isBoard={true}>
              <Circle color={board[index]}> </Circle>
            </Square>
          );
        })}
      </main>

      <footer>
        <div>
          <Square isTurn={turn === TURNS.red ? true : false}>
            <Circle color={TURNS.red}></Circle>
          </Square>

          <Square isTurn={turn === TURNS.green ? true : false}>
            <Circle color={TURNS.green}></Circle>
          </Square>
        </div>
        <button onClick={restartGame}>Restart Game</button>
      </footer>
      {window.innerWidth > 768 && (
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            top: -40,
            left: -50,
            transform: `translate(${position.x}px ,${position.y}px)`,
          }}
        >
          <Circle color={turn} />
        </div>
      )}
    </>
  );
}

export default App;
