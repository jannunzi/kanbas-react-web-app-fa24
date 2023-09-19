import "./index.css";
import Definitions from "../Hexagons/Definitions";
import Hexagon from "../Hexagons/Hexagon";
import { useEffect, useState } from "react";
import HexagonalDialog from "./HexagonalDialog";
import HexaConfig from "./HexaConfig";
import HexaLegend from "./HexaLegend";

function HexagonalCircles() {
  const [count, setCount] = useState(1);
  const [scale, setScale] = useState(2.0);
  const [cx, setCx] = useState(350);
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(-1);
  const [hexFade, setHexFade] = useState("hex-fade-in");
  const [topologySlide, setTopologySlide] = useState("topology-slide-out");
  const [legendSlide, setLegendSlide] = useState("slide-in-from-right");
  const [configSlide, setConfigSlide] = useState("slide-in-from-left");
  const showTopology = () => {
    setHexFade("hex-fade-out");
    setTopologySlide("topology-slide-in");
    setLegendSlide("slide-out-from-right");
    setConfigSlide("slide-out-from-left");
  };
  const deletePlayerByIndex = (index: number) => {
    updateCount(count - 1);
    setSelectedPlayerIndex(-1);
    setCx(640);
  };
  const selectPlayer = (index: number) => {
    setCx(420);
    setSelectedPlayerIndex(index);
  };
  const updateCount = (newCount: number) => {
    if (newCount > 18) {
      setScale(1.2);
    } else if (newCount > 6) {
      setScale(1.4);
    } else if (newCount <= 6) {
      setScale(2.0);
    }
    // setScale(3.5);
    setCount(newCount);
    // setHexFade("fadeOut");
  };
  const leader = "arc";
  const pairs = ["era300", "five"];
  const rears = ["era300", "era100"];
  const atmos = ["arc", "beam", "ray"];
  const players = [
    "beam",
    "arc",
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
  const angle = (index: number) => {
    let degrees = 0;
    if (index >= 1 && index <= 6) {
      degrees = (index * 360) / 6;
    }
    if (index > 6 && index <= 18) {
      degrees = ((index - 6) * 360) / 12;
    }
    if (index > 18 && index <= 36) {
      degrees = (index * 360) / 18;
    }
    const radians = degrees * (Math.PI / 180);
    return degrees;
  };
  const cy = 350;
  const baseRadius = 32;
  for (let i = 1; i <= count; i++) {
    const index = i;
    let radius = baseRadius;
    if (index <= 6) {
      radius = baseRadius;
    }
    if (index > 6) {
      if (index % 2 === 0) {
        radius = baseRadius * 2.01;
      } else {
        radius = baseRadius * 1.75;
      }
    }
    if (index > 18) {
      if (index % 3 === 0) {
        radius = baseRadius * 3.0;
      } else {
        radius = baseRadius * 2.6;
      }
    }
    radius = radius * 3;
    const player = players[i % players.length];
    const label = names[index % players.length];
    hexs.push(
      <Hexagon
        onClick={() => {
          selectPlayer(index);
        }}
        fill="#efefef"
        key={i}
        translate={{
          x: Math.cos(((angle(index) - 120) * Math.PI) / 180.0) * radius,
          y: Math.sin(((angle(index) - 120) * Math.PI) / 180.0) * radius,
        }}
        filter="shadow2"
        image={`/images/players/${player}.png`}
        scale={1}
        label={`${label}`}
        atmos={atmos.includes(player) ? true : false}
        leader={leader === player ? true : false}
        rear={rears.includes(player) ? true : false}
        pair={pairs.includes(player) ? true : false}
      />
    );
    // }
  }

  return (
    <div>
      <HexaConfig slide={configSlide} />
      <HexaLegend slide={legendSlide} />
      {true && (
        <HexagonalDialog
          close={() => {
            setTopologySlide("topology-slide-out");
            setHexFade("hex-fade-in");
            setLegendSlide("slide-in-from-right");
            setConfigSlide("slide-in-from-left");
          }}
          deletePlayerByIndex={deletePlayerByIndex}
          count={count}
          topologySlide={topologySlide}
        />
      )}
      <svg
        width={700}
        height={700}
        style={{
          position: "fixed",
          top: "20px",
          // backgroundColor: "gold",
        }}
        className={hexFade}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Definitions />
        <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
          {hexs}
          <Hexagon
            onClick={() => showTopology()}
            fill="#efefef"
            key={123}
            translate={{
              x: 0,
              y: 0,
            }}
            filter="shadow2"
            image={`/images/plus.png`}
            scale={1}
            label={``}
            atmos={false}
            leader={false}
            rear={false}
            pair={false}
          />
        </g>
      </svg>
    </div>
  );
}

export default HexagonalCircles;
