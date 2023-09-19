function HexaConfig({ slide }: { slide: string }) {
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
        left: "0px",
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

      <h2>Configuration</h2>
    </div>
  );
}

export default HexaConfig;
