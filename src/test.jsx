import React, { useState } from "react";
import "./test.css";
import { MdOutlineFileDownload } from "react-icons/md";
import Button from "@mui/material/Button";

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
    <div
      className="box"
      onMouseMove={handleMouseMove}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
        "--clr": "#ffee84",
      }}
    >
      <div className="btn-cover">
        <Button
          variant="contained"
          startIcon={<MdOutlineFileDownload />}
          sx={[
            { borderRadius: 50 },
            { width: "conterntFit" },
            { fontSize: "0.55rem" },
            { padding: "2px 15px" },
            { backgroundColor: "var(--appBlue)" },
          ]}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Test1;
