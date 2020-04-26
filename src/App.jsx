import React, { useState, useEffect } from "react";
import WorldFacade from "./components/WorldFacade";
import GlobalSign from "./components/GlobalSign";
import "./App.css";
import MapLegend from "./components/MapLegend";

function App() {
  const [loading, setLoading] = useState(true);
  const [globalData, setGlobalData] = useState();
  const [countriesData, setCountriesData] = useState();
  const getInfo = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/summary", {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setCountriesData(result.Countries);
        setGlobalData(result.Global);
        return result;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const sortCountriesByField = (countries, func) => {
    let countriesCopy = countries;
    countries.sort(func);
    return countriesCopy;
  };

  const onWorldInit = (worldRef) => {
    sortCountriesByField(countriesData, function (a, b) {
      return a.TotalConfirmed - b.TotalConfirmed;
      // return a.TotalRecovered - b.TotalRecovered;
    });
    console.log(countriesData);

    countriesData.forEach((country, index) => {
      const countryEl = worldRef.getCountryEl(country.CountryCode);
      let gap = (index / 24.7) * 0.1;
      if (!countryEl) {
        console.warn(`Country with code '${country.CountryCode}' wasn't found`);
        return;
      }
      countryEl.style.fill = `rgba(207, 0, 15, ${gap})`;
      // countryEl.style.fill = `rgba(0, 177, 106, ${gap})`;
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  return loading ? (
    "Loading"
  ) : (
    <div className="app">
      <h1 className="heading">COVID-19 MAP</h1>
      <GlobalSign info={globalData} />
      <WorldFacade className="world" onWorldInit={onWorldInit} />
      {/* <MapLegend data={countriesData} /> */}
    </div>
  );
}

export default App;
