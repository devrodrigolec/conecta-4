import "./App.css";
import { checkWinner, findIndexOfBoard } from "./logic";
import { Square, Circle, WinnerModal } from "./components";
import { TURNS, COLUMNS, sqVoids } from "./constants";
import { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(TURNS.red);
  const [winner, setWinner] = useState(null);
  const [enabled, setEnabled] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  useEffect(() => {
    console.log("efecto", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      {winner && <WinnerModal restartGame={restartGame} winner={winner} />}
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
