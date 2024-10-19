import React from "react";
import "./Item3.css";
import { TextGenerateEffect } from "../UI/text-generate-effect";

const words =
  "passionate about crafting impactful software solutions that seamlessly blend functionality and design while prioritizing user experience and addressing real-world challenges. Let’s embark on this exciting journey together to transform your visionary ideas into reality!";
const Item3 = () => {
  return (
    <div className="item item-3in">
      <span className="txt1">I am</span>
      <span className="txt2">
        <TextGenerateEffect
          words={words}
          style={{
            color: "var(--textCol3)",
            fontSize: "0.5rem",
            lineHeight: "1.3rem",
          }}
        />
      </span>
    </div>
  );
};

export default Item3;
