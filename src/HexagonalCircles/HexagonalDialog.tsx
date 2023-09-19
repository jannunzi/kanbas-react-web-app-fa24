import React, { useState } from "react";
function HexagonalDialog({
  topologySlide = "topology-slide-out",
  close,
}: {
  deletePlayerByIndex: (index: number) => void;
  count: number;
  topologySlide: string;
  close?: () => void;
}) {
  const [topology, setTopology] = useState([
    { id: "arc", name: "Arc", count: 0, state: "ready" },
    { id: "beam", name: "Beam", count: 0 },
    { id: "ray", name: "Ray", count: 0 },
    { id: "era100", name: "Era 100", count: 0 },
    { id: "era300", name: "Era 300", count: 0 },
    { id: "five", name: "Five", count: 0 },
    { id: "move2", name: "Move 2", count: 0 },
    { id: "roam", name: "Roam", count: 0 },
    { id: "sub", name: "Sub", count: 0 },
    { id: "submini", name: "Sub Mini", count: 0 },
  ]);
  const players = [
    "beam",
    "arc",
    "ray",
    "era100",
    "era300",
    "five",
    "move2",
    "roam",
    "sub",
    "submini",
  ];
  const names = [
    "Arc",
    "Beam",
    "Ray",
    "Era 100",
    "Era 300",
    "Five",
    "Move 2",
    "Roam",
    "Sub",
    "Sub Mini",
  ];

  return (
    <div
      className={topologySlide}
      style={{
        fontFamily: "sans-serif",
        zIndex: 100,
        width: "500px",
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
        onClick={close}
        style={{
          position: "absolute",
          right: "10px",
          top: "0px",
          fontSize: "2em",
        }}
      >
        &times;
      </div>
      <h2>Topology</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {topology.map((player, index) => {
          return (
            <div
              key={index}
              style={{
                position: "relative",
                width: "140px",
                height: "140px",
                margin: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 0px 20px 0px rgba(150,150,150,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {player.count > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "3px",
                    right: "3px",
                    backgroundColor: "red",
                    color: "white",
                    width: "30px",
                    height: "30px",
                    textAlign: "center",
                    borderRadius: "50%",
                    fontWeight: "bold",
                    // paddingTop: "10px",
                  }}
                >
                  <div style={{ position: "relative", top: 5 }}>
                    {player.count}
                  </div>
                </div>
              )}
              <img
                onClick={() => {
                  const newTopology = [...topology];
                  newTopology[index].count += 1;
                  if (newTopology[index].count > 3) {
                    newTopology[index].count = 0;
                  }
                  setTopology(newTopology);
                }}
                src={`/images/players/${player.id}.png`}
                style={{
                  maxWidth: "120px",
                  maxHeight: "80px",
                }}
              />
              <div>{player.name}</div>
            </div>
          );
        })}
      </div>
      {/* <button
        onClick={() => {
          deletePlayerByIndex(count - 1);
        }}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          right: "20px",
          backgroundColor: "red",
          border: "none",
          borderRadius: "10px",
          height: "40px",
          color: "white",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        Delete
      </button> */}
    </div>
  );
}

export default HexagonalDialog;
