import { useState, useEffect } from "react";



export function useMouseEventMove ({handleMove}) {


  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  useEffect(() => {
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return {enabled, setEnabled}

}