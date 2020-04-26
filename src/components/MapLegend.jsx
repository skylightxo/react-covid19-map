import React from "react";

export default function MapLegend(data) {
  console.log(data);
  console.log(data[0]);
  return (
    <div className="map-legend">
      <div className="color-box"></div>
      <span>{/* {data[26].totalConfirmed}-{data[0].totalConfirmed} */}</span>
    </div>
  );
}
