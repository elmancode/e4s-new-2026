import React, { useEffect } from "react";
import Unicef from "../image/unicef.png";
import AzStat from "../image/azstat.png";

const MICS = () => {

  useEffect(() =>{
    window.scrollTo(0,0)
  })
  
  return (
    <div className="mics">
      <div className="cover">
        <div className="overlay"></div>

        <div className="content">
          <div className="container">
            <h2>Projects</h2>
          </div>
        </div>
      </div>

      <div className="text">
      <div className="container">
          <h3>MICS Azerbaijan 2023</h3>
          <p>
            The Multiple Indicator Cluster Survey (MICS) initiative carries out
            household surveys throughout several nations to collect information
            on different variables relating to the welfare of children and
            women, covering topics like health, education, child protection,
            water, and sanitation.
          </p>
          <p>
            The E4S team monitored the teams to guarantee that the process was
            carried out according to the guidelines set by the MICS project. The
            E4S team conducted regular site visits in order to observe the team
            in the field.
          </p>
          <p>
          The E4S team completed a number of significant tasks during the fieldwork:
          </p>
          <ul>
            <li>Observing Interview Process.</li>
            <li>Monitoring the Anthropometry and Water Quality Testing.</li>
            <li>Checking revisited households.</li>
            <li>Verification of GPS points.</li>
          </ul>
        </div>

        <div className="partners">
            <div className="container">
          <h2>Partners</h2>
          <img src={Unicef} alt="" />
          <img src={AzStat} alt="" />
          </div>
          </div> 
      </div>
    </div>
  );
};

export default MICS;
