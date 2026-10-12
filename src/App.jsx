import { useGame } from "./GameContext";
import GameScreen from "./GameScreen";
import Welcome from "./Welcome";

export default function App() {
  const { isPlaying } = useGame();
  return <>{isPlaying ? <GameScreen /> : <Welcome />}</>;
}
