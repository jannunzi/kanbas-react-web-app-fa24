function Hexagon({
  onClick = () => {},
  fill = "rgba(228, 216, 216, 0.70)",
  stroke = "rgba(228, 216, 216, 0.37)",
  translate = { x: 0, y: 0 },
  scale = 1,
  filter = "",
  image = "",
  label = "Label",
  leader = false,
  atmos = false,
  rear = false,
  pair = false,
}) {
  const innerScale = 1;
  const badgeText = (badge: any) => (
    <g transform={`translate(${badge.x}, ${badge.y}) scale(4)`}>
      <circle r="1.25" cx={(1.75 * badge.text.length) / 5} fill={badge.color} />
      <circle
        r="1.25"
        cx={(-1.75 * badge.text.length) / 5}
        fill={badge.color}
      />
      <rect
        x={(-2 * badge.text.length) / 5}
        y="-1.25"
        width={(4 * badge.text.length) / 5}
        height="2.5"
        fill={badge.color}
      />
      <text
        y="0.5"
        style={{
          fontFamily: "sans-serif",
          fill: "black",
          fontSize: "0.1em",
        }}
        textAnchor="middle"
      >
        {badge.text}
      </text>
    </g>
  );
  const badges = {
    leader: {
      x: 0,
      y: -40,
      color: "#dddddd",
      text: "G",
    },
    atmos: {
      x: 23,
      y: -25,
      color: "#dddddd",
      text: "Atmos",
    },
    rear: {
      x: -2,
      y: -25,
      color: "#dddddd",
      text: "Rear",
    },
    pair: {
      x: -25,
      y: -25,
      color: "#dddddd",
      text: "Pair",
    },
  };
  return (
    <g
      onClick={onClick}
      transform={`translate(${translate.x}, ${translate.y}) scale(${scale})`}
    >
      <polygon
        // points="50   1   95  25   95 75  50 99    5 75    5  25"
        points="0  -50  43 -25   43 25   0 50      -43 25  -43 -25"
        fill={fill}
        opacity="0.5"
        stroke={stroke}
        filter={`url(#${filter})`}
        transform={`scale(${innerScale})`}
      />
      {image && (
        <image
          transform={`scale(${innerScale * 0.45})`}
          x="-50"
          y="-50"
          href={image}
          height="100"
          width="100"
        />
      )}
      {label && (
        <text
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fill: "black",
          }}
          x="0"
          y="55"
          textAnchor="middle"
          transform={`scale(${innerScale * 0.7})`}
        >
          {label}
        </text>
      )}
      {leader && badgeText(badges.leader)}
      {atmos && badgeText(badges.atmos)}
      {rear && badgeText(badges.rear)}
      {pair && badgeText(badges.pair)}
    </g>
  );
}

export default Hexagon;
