function Filters() {
  return (
    <>
      <filter id="shadow1">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
      <filter id="shadow2-1">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="6"
          flood-color="black"
          flood-opacity="1"
        />
        {/* <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" /> */}
      </filter>
      <filter id="shadow2">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="4"
          flood-color="gray"
          flood-opacity="1"
        />
        {/* <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" /> */}
      </filter>
      <filter id="shadow3">
        <feDropShadow
          dx="-0.8"
          dy="-0.8"
          stdDeviation="0"
          flood-color="pink"
          flood-opacity="0.5"
        />
      </filter>
    </>
  );
}

export default Filters;
