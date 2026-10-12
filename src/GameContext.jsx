import { createContext, useContext, useState } from "react";

const GameContext = createContext();

function makeField() {
  const field = Array(9).fill(false);
  const mole = Math.floor(Math.random() * field.length);
  field[mole] = true;
  return field;
}

export default function GameProvide({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [field, setField] = useState(makeField());
  const [score, setScore] = useState(0);

  function startGame() {
    setIsPlaying(true);
  }

  function restartGame() {
    setIsPlaying(false);
    setScore(0);
  }

  function whackMole() {
    score(score + 1);
    setField(makeField());
  }

  const value = {
    isPlaying,
    field,
    score,
    startGame,
    restartGame,
    whackMole,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used inside GameProvider.");
  return context;
}
