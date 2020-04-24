import React, { useState, useEffect } from "react";
import WorldFacade from "./components/WorldFacade";
import GlobalSign from "./components/GlobalSign";
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
        setGlobalData(result.Global);
        console.log(result);
        console.log(globalData);
        return result;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  const onWorldInit = (worldRef) => {
    getInfo().then((result) => {
      console.log(result);

      const countries = result.Countries.slice(0, 300);

      countries.forEach((country, index) => {
        const countryEl = worldRef.getCountryEl(country.CountryCode);
        const gap = (index + 1) / 200;
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
      <h1 className="heading">COVID-19 MAP</h1>
      <GlobalSign info={globalData} />
      <WorldFacade className="world" onWorldInit={onWorldInit} />
    </div>
  );
}

export default App;
