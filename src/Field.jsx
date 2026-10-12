import Hole from "./Hole";
import Mole from "./Mole";

export default function Field() {
  return (
    <ul>
      {field.map((isMole) => {
        if (isMole) {
          return <Mole />;
        }
        return <Hole />;
      })}
    </ul>
  );
}
