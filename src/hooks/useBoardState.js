import { useState } from "react";
import { COLUMNS, TURNS } from "../constants";
import { findIndexOfBoard } from "../logic";
import { checkWinner } from "../logic";


export function useBoardState ({setEnabled}) {
  const [board, setBoard] = useState(Array(42).fill(null));
  const [turn, setTurn] = useState(TURNS.red);
  const [winner, setWinner] = useState(null);

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

  
  const restartGame = () => {
    setBoard(Array(42).fill(null));
    setTurn(TURNS.red);
    setWinner(null);
    setEnabled(true);
  };

  return {board, turn, winner, updateBoard, restartGame}
}
