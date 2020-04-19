import React, { useState, useEffect } from "react";
import world from "./world.svg";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [globalData, setGlobalData] = useState([]);
  const getInfo = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/summary", {
        method: "GET",
      });
      const result = await response.json();
      if (response.ok) {
        setLoading(false);
        console.log(result);
        setGlobalData(result.Global);
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    getInfo();
  }, [])
  // const colorMap = function(data){
  //   data.
  // }
  return loading ? "Loading" : (
  <div className="app">
    <p>{globalData}</p>
    <img className="world" src={world} alt="world" />
  </div>)
}

export default App;
