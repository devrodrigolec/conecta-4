import "./App.css";
import { Square, Circle, WinnerModal } from "./components";
import { TURNS, sqVoids } from "./constants";
import { usePosition, useEventMove, useBoardState } from "./hooks";

function App() {
  const { position, handleMove } = usePosition();
  const { setEnabled } = useEventMove({ handleMove });
  const { board, turn, winner, updateBoard, restartGame } = useBoardState({
    setEnabled,
  });

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
