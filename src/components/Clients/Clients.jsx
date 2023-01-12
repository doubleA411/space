import React from "react";
import "./Clients.css";
import SubHeader from "../SubHeader/SubHeader";
import adani from '../../assets/adani.png';
import pss from "../../assets/pss.png";
import csq from "../../assets/CSQ.png";


function Clients() {
  return (
    <div className="clients">
      <SubHeader title="Clients" />
      <div className="c-logo">
        <img src={adani} alt="" />
        <img src={pss} alt="" />
        <img src={csq} alt="" />
      </div>
    </div>
  );
}

export default Clients;
