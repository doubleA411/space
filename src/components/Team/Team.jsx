import React from "react";
import "./Team.css";
import SubHeader from "../SubHeader/SubHeader";

function Team() {
  return (
    <div className="team">
      <SubHeader title="Meet the Team" />
      <div className="mates">
        <div className="bubble"><p>Arjun R</p></div>
        <div className="bubble"><p>Santhosh D</p></div>
        <div className="bubble"><p>Nithish V</p></div>
        <div className="bubble"><p>Aakash S</p></div>
      </div>
    </div>
  );
}

export default Team;
