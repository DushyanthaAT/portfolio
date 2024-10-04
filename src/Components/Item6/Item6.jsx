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
    <div className="item item-6">
      <div className="expertise-container">
        <div className="exp-left">
          <div className="txt1">Expertise</div>
          <div className="txt2">My Technical Level</div>
        </div>
        <div className="exp-right">
          <div className="exp-right-flex1">
            <Icons ImgURL={html} Name="HTML" />
            <Icons ImgURL={css} Name="CSS" />
            <Icons ImgURL={js} Name="JavaScript" />
            <Icons ImgURL={c} Name="C" />
            <Icons ImgURL={java} Name="Java" />
            <Icons ImgURL={python} Name="Python" />
          </div>
          <div className="exp-right-flex2">
            <Icons ImgURL={nodeJs} Name="NodeJs" />
            <Icons ImgURL={react} Name="React" />
            <Icons ImgURL={flutter} Name="Flutter" />
            <Icons ImgURL={boostrap} Name="Boostrap" />
            <Icons ImgURL={firebase} Name="Firebase" />
          </div>
          <div className="exp-right-flex3">
            <Icons ImgURL={mongoDB} Name="MongoDB" />
            <Icons ImgURL={mySQL} Name="My SQL" />
            <Icons ImgURL={git} Name="Git" />
            <Icons ImgURL={github} Name="Github" />
            <Icons ImgURL={xd} Name="XD" />
            <Icons ImgURL={figma} Name="Figma" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item6;
