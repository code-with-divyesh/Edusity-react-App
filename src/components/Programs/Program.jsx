import React from "react";
import { assets } from "../../assets";
import "./Programs.css";

const Program = () => {
  return (
    <div className="programs" id="programs">
      <div className="program">
        <img src={assets.program1} alt="program1" />
        <div className="captions">
          <img src={assets.programIcon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program2} alt="program2" />
        <div className="captions">
          <img src={assets.programIcon2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={assets.program3} alt="program3" />
        <div className="captions">
          <img src={assets.programIcon3} alt="" />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
