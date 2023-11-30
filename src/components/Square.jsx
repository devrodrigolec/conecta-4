import "./square.css";

export const Square = ({
  children,
  isBoard,
  updateBoard,
  indexOfColumn,
  isTurn,
}) => {
  const handleClick = () => {
    updateBoard(indexOfColumn);
  };

  return (
    <div
      onClick={handleClick}
      className={`square ${isBoard ? "board" : ""} ${isTurn ? "playing" : ""}`}
    >
      {children}
    </div>
  );
};
