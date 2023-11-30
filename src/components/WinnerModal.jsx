import { Circle } from "./Circle";
import "./winnerModal.css";

export const WinnerModal = ({ winner, restartGame }) => {
  return (
    <section className="winner-modal">
      <div className="winner-modal__window">
        <h2>We have a winner!!</h2>
        <p>Congratulations Player {winner === "red" ? "Red" : "Green"}</p>
        <Circle color={winner}></Circle>
        <button onClick={restartGame}>Restart Game</button>
      </div>
    </section>
  );
};
