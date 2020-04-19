import React, { useState } from "react";
import world from "./world.svg";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const getInfo = async () => {
    try {
      const response = await fetch("https://api.covid19api.com/summary", {
        method: "GET",
      });
      if (response.ok) {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
    return response;
  };
  getInfo();
  const colorMap = function(data){
    data.
  }
  return loading ? "Loading" : <img src={world} alt="world" />;
}

export default App;
