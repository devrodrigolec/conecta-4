import "./circle.css";

export const Circle = ({ children, hover, color, followMouse }) => {
  return (
    <div
      className={`circle ${hover} ${color === "red" ? "red-filled" : ""} ${
        color === "green" ? "green-filled" : ""
      } ${followMouse}`}
    >
      {children}
    </div>
  );
};
