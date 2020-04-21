import React, { useEffect, useRef } from "react";
import World from "./World";

function WorldFacade({ onWorldInit, ...otherProps }) {
  const worldRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      onWorldInit && onWorldInit(worldRef.current);
    }, 500);
  }, []);

  return <World ref={worldRef} {...otherProps} />;
}

export default WorldFacade;
