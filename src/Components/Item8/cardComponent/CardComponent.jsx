import React from "react";
import "./cardComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiAdobexd } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const CardComponent = ({ item }) => {
  const icons = Array.isArray(item.iconImages) ? item.iconImages : [];

  const renderDesignIcon = () => {
    if (item.designTool === "figma") {
      return <FaFigma className="com-icon" />;
    } else if (item.designTool === "xd") {
      return <SiAdobexd className="com-icon" />;
    } else {
      return <i className="fa-solid fa-pen-ruler"></i>; // Default icon if no designTool is provided
    }
  };

  return (
    <div className="ProContainer">
      <div className="Cflex1">
        <div className="ProIcon">
          {icons.length > 0 ? (
            icons.map((iconSrc, index) => (
              <img
                key={index}
                src={iconSrc}
                alt={`Icon ${index}`}
                className="card-icon"
              />
            ))
          ) : (
            <p>No icons available</p>
          )}
        </div>
      </div>
      <div className="Cflex2">
        <img src={item.imageurl} alt="sd" />
      </div>
      <div className="Cflex3">
        <span className="ProTitle">{item.title}</span>
        <span className="ProDescription">{item.desc}</span>
      </div>
      <div className="Cflex4">
        <div className="button">
          {item.beUrl && (
            <div
              className="btn-icon"
              onClick={() => window.open(item.beUrl, "_blank")}
            >
              <div className="icon">
                <i className="fa-brands fa-behance com-icon"></i>
              </div>
              <span>
                See the <br />
                Case Study
              </span>
            </div>
          )}
          {item.gitUrl && (
            <div
              className="btn-icon"
              onClick={() => window.open(item.gitUrl, "_blank")}
            >
              <div className="icon">
                <i className="fa-brands fa-github com-icon"></i>
              </div>
              <span>
                See the <br />
                Code
              </span>
            </div>
          )}
          {item.figUrl && (
            <div
              className="btn-icon design-icon"
              onClick={() => window.open(item.figUrl, "_blank")}
            >
              <div className="icon">{renderDesignIcon()}</div>
              <span>
                See the <br />
                Design
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
