import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { MdOutlineFileDownload } from "react-icons/md";
import "./Item5.css";

const Item5 = () => {
  return (
    <div className="item item-5">
      <div className="icons">
        <IoDocumentTextOutline />
      </div>
      <div className="txt1">CV</div>
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
  );
};

export default Item5;
