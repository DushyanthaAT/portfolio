import React from "react";
import "./cardComponent.css";

const CardComponent = ({
  iconImages,
  ImgURL,
  Title,
  Desc,
  BeURL,
  GitURL,
  FigURL,
}) => {
  const icons = Array.isArray(iconImages) ? iconImages : [];
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
        <img src={ImgURL} alt="" />
      </div>
      <div className="Cflex3">
        <span className="ProTitle">{Title}</span>
        <span className="ProDescription">{Desc}</span>
      </div>
      <div className="Cflex4">
        <div className="button">
          <div
            className="btn-icon"
            onClick={() => {
              window.open(BeURL, "_blank");
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
              window.open(GitURL, "_blank");
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
              window.open(FigURL, "_blank");
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
