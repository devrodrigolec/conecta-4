import { Circle } from "./Circle";
import "./winnerModal.css";

export const WinnerModal = ({ winner, restartGame }) => {
  return (
    <section className="winner-modal">
      {winner && (
        <div className="winner-modal__window">
          <h2>We have a winner!!</h2>
          <p>Congratulations Player {winner === "red" ? "Red" : "Green"}</p>
          <Circle color={winner}></Circle>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
      {!winner && (
        <div className="winner-modal__window">
          <h2>We have not a winner!!</h2>
          <p>It{`'`}s a Draw!</p>

          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </section>
  );
};
