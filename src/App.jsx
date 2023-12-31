import "./App.css";
import { Square, Circle, WinnerModal } from "./components";
import { TURNS, sqVoids } from "./constants";
import { usePosition, useMouseEventMove, useBoardState } from "./hooks";

function App() {
  const { position, handleMove } = usePosition();
  const { setEnabled } = useMouseEventMove({ handleMove });
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
          {sqVoids.map((_, index) => {
            return (
              <Square
                isSqVoid={true}
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
            <Circle color='red'></Circle>
          </Square>

          <Square isTurn={turn === TURNS.green ? true : false}>
            <Circle color='green'></Circle>
          </Square>
        </div>
        <button onClick={restartGame}>Restart Game</button>
        <span className="credits">💻 Coded by Rodrigo Leciñana 💻 </span>
      </footer>
      {window.innerWidth > 768 && (
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            top: -30,
            left: -30,
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
