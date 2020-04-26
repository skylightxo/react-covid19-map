import React from "react";

export default function GlobalSign({ info }) {
  const {
    TotalConfirmed,
    NewConfirmed,
    TotalDeaths,
    NewDeaths,
    TotalRecovered,
    NewRecovered,
  } = info;

  return (
    <div className="global-sign">
      <p className="global-sign__info">
        Total Cases:
        <span className="global-sign__info__value">{TotalConfirmed}</span>
      </p>
      <p className="global-sign__info">
        New Cases:
        <span className="global-sign__info__value">{NewConfirmed}</span>
      </p>
      <p className="global-sign__info">
        Total Deaths:
        <span className="global-sign__info__value">{TotalDeaths}</span>
      </p>
      <p className="global-sign__info">
        New Deaths:
        <span className="global-sign__info__value">{NewDeaths}</span>
      </p>
      <p className="global-sign__info">
        Total Recovered:
        <span className="global-sign__info__value">{TotalRecovered}</span>
      </p>
      <p className="global-sign__info">
        New Recovered:
        <span className="global-sign__info__value">{NewRecovered}</span>
      </p>
    </div>
  );
}
