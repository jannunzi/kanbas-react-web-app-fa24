import Hexagon from "../Hexagons/Hexagon";

function HexaLegend({ slide }: { slide: string }) {
  const legend = ["ready", "active", "inactive", "disabled"];
  return (
    <div
      className={slide}
      style={{
        fontFamily: "sans-serif",
        zIndex: 100,
        width: "300px",
        padding: "20px",
        margin: "20px",
        top: "0px",
        right: "0px",
        bottom: "0px",
        position: "fixed",
        backgroundColor: "rgba(250, 250, 250, 0.5)",
        boxShadow: "0px 0px 20px 0px rgba(150,150,150,0.5)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "0px",
          fontSize: "2em",
        }}
      >
        &times;
      </div>
      <h2>Legend</h2>
      <svg height={500}>
        {legend.map((item, index) => {
          return (
            <Hexagon
              // onClick={() => showTopology()}
              key={123}
              translate={{
                x: 50,
                y: 70 + index * 120,
              }}
              fill="#efefef"
              scale={1}
              filter="shadow2"
              label={item}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default HexaLegend;
