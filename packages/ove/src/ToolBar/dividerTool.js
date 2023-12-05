import React from "react";

//create a new vertical line component that divides the toolbar
const VerticalLine = ({ height, color, thickness }) => {
  const lineStyle = {
    borderLeft: `${thickness}px solid ${color}`,
    height: height || "100%", // Default height to 100% if not provided
    margin: 0,
    padding: 0
  };

  return <div style={lineStyle}></div>;
};

const verticalLine = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div className="veToolbarSpacer" />
    <VerticalLine height="30px" color="rgb(189, 200, 210)" thickness={2} />
  </div>
);

export default verticalLine;
