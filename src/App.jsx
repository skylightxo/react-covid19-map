import React, { useState, useEffect, useRef } from "react";
import World from "./components/World";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [globalData, setGlobalData] = useState();
  const worldMap = useRef();
  const getInfo = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/summary", {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setLoading(false);
        setGlobalData(result.Global.TotalConfirmed);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    getInfo();
    setTimeout(()=>{
      worldMap.current.getCountryEl('UA').style.fill = 'red';
    }, 500)
  }, [])
  
  return loading ? "Loading" : (
  <div className="app">
    <p>{globalData}</p>
    <World ref={worldMap} className="world"/>
  </div>)
}

export default App;