import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Item5.css";
import { HoverBorderGradient } from "../UI/hover-border-gradient";

const Item5 = () => {
  return (
    <div className="item item-5in">
      <div className="icons">
        <IoDocumentTextOutline />
      </div>
      <div className="txt1">CV</div>
      <div className="btn-cont">
        <a href="/cv.pdf" download="Dushyantha_CV.pdf" className="download-btn">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="HoverBorderGradient"
          >
            <MdOutlineFileDownload size={15} />
            <span className="text">Download</span>
          </HoverBorderGradient>
        </a>
      </div>
    </div>
  );
};

export default Item5;
