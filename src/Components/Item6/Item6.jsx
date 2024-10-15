import React from "react";
import Icons from "../iconComponent/icons";
import {
  boostrap,
  c,
  css,
  figma,
  firebase,
  flutter,
  git,
  github,
  html,
  java,
  js,
  mongoDB,
  mySQL,
  nodeJs,
  python,
  react,
  xd,
  webSite,
} from "../../images";
import "./Item6.css";

const Item6 = () => {
  return (
    <div className="item item-6in">
      <div className="expertise-container">
        <div className="exp-left">
          <div className="txt1">Expertise</div>
          <div className="txt2">My Technical Level</div>
        </div>
        <div className="exp-right">
          <div className="exp-right-flex1">
            <Icons ImgURL={html} Name="HTML" className="exp-icon" />
            <Icons ImgURL={css} Name="CSS" className="exp-icon" />
            <Icons ImgURL={js} Name="JavaScript" className="exp-icon" />
            <Icons ImgURL={c} Name="C" className="exp-icon" />
            <Icons ImgURL={java} Name="Java" className="exp-icon" />
            <Icons ImgURL={python} Name="Python" className="exp-icon" />
          </div>
          <div className="exp-right-flex2">
            <Icons ImgURL={nodeJs} Name="NodeJs" className="exp-icon" />
            <Icons ImgURL={react} Name="React" className="exp-icon" />
            <Icons ImgURL={flutter} Name="Flutter" className="exp-icon" />
            <Icons ImgURL={boostrap} Name="Boostrap" className="exp-icon" />
            <Icons ImgURL={firebase} Name="Firebase" className="exp-icon" />
          </div>
          <div className="exp-right-flex3">
            <Icons ImgURL={mongoDB} Name="MongoDB" className="exp-icon" />
            <Icons ImgURL={mySQL} Name="My SQL" className="exp-icon" />
            <Icons ImgURL={git} Name="Git" className="exp-icon" />
            <Icons ImgURL={github} Name="Github" className="exp-icon" />
            <Icons ImgURL={xd} Name="XD" className="exp-icon" />
            <Icons ImgURL={figma} Name="Figma" className="exp-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item6;
