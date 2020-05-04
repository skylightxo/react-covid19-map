import React from "react";

export default function MapLegend({ data }) {
  console.log(data);
  const gap = Math.ceil(data.length / 10);
  const leftoverCountriesNum = ((data.length / 10) % 1) * 10;
  console.log(leftoverCountriesNum);

  console.log(gap);

  const legendData = [];
  data.forEach((country, index) => {
    if ((index + 1) % gap === 0) {
      legendData.push(data[index - gap + 1]);
      legendData.push(data[index]);
    }
    index++;
  });
  legendData.push(data[data.length - leftoverCountriesNum]);
  legendData.push(data[data.length - 1]);

  console.log(legendData[14]);

  return (
    <div className="map-legend">
      {legendData.map((country, index) => {
        return index % 2 === 0 ? (
          <div key={"group_" + index} className="map-legend__info">
            <div key={"div_" + index} className={`color-box_${index}`}></div>
            {console.log(index)}

            <span key={"num_" + index}>
              {legendData[index].TotalConfirmed}
              {legendData[index + 1]
                ? " - " + legendData[index + 1].TotalConfirmed
                : ""}
            </span>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}
