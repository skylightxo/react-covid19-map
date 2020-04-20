import React, { useState, useEffect } from "react";
import World from "./components/World";

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
        console.log(result);
        setGlobalData(result.Global.TotalConfirmed);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    getInfo();
  }, [])
  return loading ? "Loading" : (
  <div className="app">
    <p>{globalData}</p>
    <World className="world"/>
  </div>)
}

export default App;