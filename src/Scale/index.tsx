import Definitions from "../Hexagons/Definitions";
import Hexagon from "../Hexagons/Hexagon";

function Scale() {
  return (
    <svg width={1000} height={1000} style={{ backgroundColor: "beige" }}>
      <Definitions />
      <g transform="scale(2)">
        <Hexagon
          fill="#efefef"
          key={123}
          translate={{
            x: 100,
            y: 100,
          }}
          filter="shadow2"
          image={`/images/players/five.png`}
          scale={2}
          label={"Five"}
          atmos={true}
          leader={true}
          rear={false}
          pair={false}
        />
        <Hexagon
          fill="#efefef"
          key={123}
          translate={{
            x: 200,
            y: 100,
          }}
          filter="shadow2"
          image={`/images/players/five.png`}
          scale={1}
          label={"Five"}
          atmos={true}
          leader={true}
          rear={false}
          pair={false}
        />
      </g>
    </svg>
  );
}

export default Scale;
