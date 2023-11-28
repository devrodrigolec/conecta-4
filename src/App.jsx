import { useState } from "react";
import "./App.css";
import { Circle } from "./components/Circle";
import { Square } from "./components/Square";
import { sqVoids } from "./constants";

function App() {
  const [board, setBoard] = useState(Array(42).fill(null));

  return (
    <>
      <header>
        <h1>Conecta 4</h1>
        <div className="sq-voids">
          {sqVoids.map((sq, index) => {
            return (
              <Square key={index}>
                <Circle></Circle>
              </Square>
            );
          })}
        </div>
      </header>
      <main>
        {board.map((sq, index) => {
          return (
            <Square key={index} isBoard={true}>
              <Circle> {index}</Circle>
            </Square>
          );
        })}
      </main>
      <footer>
        <Square>
          <Circle></Circle>
        </Square>
        <Square>
          <Circle></Circle>
        </Square>
      </footer>
    </>
  );
}

export default App;
