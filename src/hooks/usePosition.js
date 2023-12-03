import { useState } from "react";

export function usePosition () {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  return {position, handleMove}

} 