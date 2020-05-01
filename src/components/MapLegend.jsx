import React from "react";
import sortCountriesByField from "../functions/sortCountriesByField";
import cutOffHealthyCountries from "../functions/cutOffHealthyCountries";

export default function MapLegend({ data }) {
  sortCountriesByField(data, function (a, b) {
    return a.TotalConfirmed - b.TotalConfirmed;
  });

  const modifiedCountryList = cutOffHealthyCountries(data);
  console.log(modifiedCountryList);

  return (
    <div className="map-legend">
      <div className="map-legend__info">
        <div className="color-box"></div>
        <span>
          {modifiedCountryList[18].TotalConfirmed}-
          {modifiedCountryList[0].TotalConfirmed}
        </span>
      </div>
    </div>
  );
}
