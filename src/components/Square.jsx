import "./square.css";

export const Square = ({
  children,
  isBoard,
  updateBoard,
  indexOfColumn,
  isTurn,
  isSqVoid
}) => {
  const handleClick = () => {
    updateBoard(indexOfColumn);
  };

  return (
    <div
      onClick={isSqVoid && handleClick}
      className={`square ${isBoard ? "board" : ""} ${isTurn ? "playing" : ""}`}
    >
      {children}
    </div>
  );
};
