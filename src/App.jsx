import React, { useState, useEffect, useRef } from "react";
import WorldFacade from "./components/WorldFacade";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [globalData, setGlobalData] = useState();

  const getInfo = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/summary", {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setLoading(false);
        setGlobalData(result.Global.TotalConfirmed);
        return result;
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  const onWorldInit = (worldRef) => {
    getInfo().then((result) => {
      console.log(result);

      const countries = result.Countries.slice(0, 10);

      countries.forEach((country, index) => {
        const countryEl = worldRef.getCountryEl(country.CountryCode);
        const gap = (index + 1) / 10;
        if (!countryEl) {
          console.warn(
            `Country with code '${country.CountryCode}' wasn't found`
          );
          return;
        }

        countryEl.style.fill = `rgba(207, 0, 15, ${gap})`;
      });
    });
  };

  return loading ? (
    "Loading"
  ) : (
    <div className="app">
      <p>{globalData}</p>
      <WorldFacade onWorldInit={onWorldInit} />
    </div>
  );
}

export default App;
