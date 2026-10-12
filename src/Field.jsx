import { useGame } from "./GameContext";
import Hole from "./Hole";
import Mole from "./Mole";

export default function Field() {
  const { field } = useGame();
  return (
    <ul>
      {field.map((isMole, i) => {
        if (isMole) {
          return <Mole key={i} />;
        }
        return <Hole key={i} />;
      })}
    </ul>
  );
}
