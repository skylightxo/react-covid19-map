import React, { useState, useEffect, useCallback } from "react";
import WorldFacade from "./components/WorldFacade";
import GlobalSign from "./components/GlobalSign";
import MapLegend from "./components/MapLegend";
import sortCountriesByField from "./functions/sortCountriesByField";
import cutOffHealthyCountries from "./functions/cutOffHealthyCountries";
import "./App.css";

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

  const onWorldInit = useCallback(
    (worldRef) => {
      sortCountriesByField(countriesData, function (a, b) {
        return a.TotalConfirmed - b.TotalConfirmed;
      });

      const modifiedCountriesList = cutOffHealthyCountries(countriesData);
      console.log(modifiedCountriesList);

      modifiedCountriesList.forEach((country, index) => {
        const countryEl = worldRef.getCountryEl(country.CountryCode);
        let gap = (index / 17.8) * 0.1;
        if (!countryEl) {
          console.warn(
            `Country with code '${country.CountryCode}' wasn't found`
          );
          return;
        }
        countryEl.style.fill = `rgba(207, 0, 15, ${gap})`;

        // countryEl.style.fill = `rgba(0, 177, 106, ${gap})`;
      });
    },
    [countriesData]
  );

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
      <MapLegend data={countriesData} />
    </div>
  );
}

export default App;
