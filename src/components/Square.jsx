import "./square.css";

export const Square = ({ children, isBoard }) => {
  return <div className={`square ${isBoard ? "board" : ""}`}>{children}</div>;
};
