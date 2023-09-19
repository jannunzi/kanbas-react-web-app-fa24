import Definitions from "./Definitions";
import Hexagon from "./Hexagon";
import "./index.css";

function Hexagons() {
  const leader = "arc";
  const pairs = ["era300", "five"];
  const rears = ["era300", "era100"];
  const atmos = ["arc", "beam", "ray"];
  const players = [
    "arc",
    "beam",
    "era100",
    "era300",
    "five",
    "move2",
    "ray",
    "roam",
    "sub",
    "submini",
  ];
  const names = [
    "Arc",
    "Beam",
    "Era 100",
    "Era 300",
    "Five",
    "Move 2",
    "Ray",
    "Roam",
    "Sub",
    "Sub Mini",
  ];
  const hexs = [];
  const rows = 10;
  const cols = 10;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const player = players[(row * rows + col) % players.length];
      //   const randomIndex = Math.floor(Math.random() * players.length);
      //   const player = players[randomIndex];
      const label = names[(row * cols + col) % players.length];
      hexs.push(
        <Hexagon
          fill="#efefef"
          key={`${row}-${col}`}
          translate={{
            x: col * 20 + (row % 2 === 0 ? 0 : 10),
            y: row * 16.5,
          }}
          filter="shadow2"
          image={`/images/players/${player}.png`}
          scale={0.2}
          label={label}
          atmos={atmos.includes(player) ? true : false}
          leader={leader === player ? true : false}
          rear={rears.includes(player) ? true : false}
          pair={pairs.includes(player) ? true : false}
        />
      );
    }
  }

  return (
    <div>
      <svg
        viewBox="0 0 100 100"
        // style={{ backgroundColor: "red" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Definitions />
        <g>{hexs}</g>
      </svg>
    </div>
  );
}

export default Hexagons;
