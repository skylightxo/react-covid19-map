import React from "react";

export default function MapLegend({ data }) {
  const sortCountriesByField = (countries, func) => {
    let countriesCopy = countries;
    countries.sort(func);
    return countriesCopy;
  };
  sortCountriesByField(data, function (a, b) {
    return b.TotalConfirmed - a.TotalConfirmed;
  });
  return (
    <div className="map-legend">
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[26].TotalConfirmed}-{data[0].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[54].TotalConfirmed}-{data[27].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[82].TotalConfirmed}-{data[55].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[110].TotalConfirmed}-{data[83].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[138].TotalConfirmed}-{data[111].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[166].TotalConfirmed}-{data[139].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[194].TotalConfirmed}-{data[167].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[222].TotalConfirmed}-{data[195].TotalConfirmed}
        </span>
      </div>
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {data[245].TotalConfirmed}-{data[223].TotalConfirmed}
        </span>
      </div>
    </div>
  );
}
