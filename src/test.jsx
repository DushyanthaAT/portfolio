import React, { useState } from "react";
import "./test.css";

const Test1 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetLeft, offsetTop } = e.target;
    setMousePosition({
      x: e.pageX - offsetLeft,
      y: e.pageY - offsetTop,
    });
  };
  return (
    <div className="Wrapper">
      <div
        className="box"
        onMouseMove={handleMouseMove}
        style={{
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
          "--clr": "#ffee84",
        }}
      ></div>
    </div>
  );
};

export default Test1;
