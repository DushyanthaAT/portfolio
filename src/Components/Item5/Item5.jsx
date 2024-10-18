import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
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
      {/* <div className="btn-cont">
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
      </div> */}
      <div className="btn-cont">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="HoverBorderGradient"
        >
          <MdOutlineFileDownload size={15} />
          <span className="text">Download</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Item5;
