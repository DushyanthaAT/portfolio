import React from "react";
import "./cardComponent.css";

const CardComponent = ({ item }) => {
  const icons = Array.isArray(item.iconImages) ? item.iconImages : [];
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
          <div
            className="btn-icon"
            onClick={() => {
              window.open(item.beUrl, "_blank");
            }}
          >
            <div className="icon">
              <i class="fa-brands fa-behance"></i>
            </div>
            <span>
              See the <br />
              Case Study
            </span>
          </div>
          <div
            className="btn-icon"
            onClick={() => {
              window.open(item.gitUrl, "_blank");
            }}
          >
            <div className="icon">
              <i class="fa-brands fa-github"></i>
            </div>
            <span>
              See the <br />
              Code
            </span>
          </div>
          <div
            className="btn-icon"
            onClick={() => {
              window.open(item.figUrl, "_blank");
            }}
          >
            <div className="icon">
              <i class="fa-brands fa-figma"></i>
            </div>
            <span>
              See the <br />
              Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
