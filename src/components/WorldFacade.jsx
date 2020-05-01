import React, { useEffect, useRef } from "react";
import World from "./World";

function WorldFacade({ onWorldInit, ...otherProps }) {
  const worldRef = useRef();

  useEffect(() => {
    onWorldInit && onWorldInit(worldRef.current);
  }, [onWorldInit]);

  return <World ref={worldRef} {...otherProps} />;
}

export default WorldFacade;
