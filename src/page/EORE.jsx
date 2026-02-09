import React, { useEffect } from "react";
import Unicef from "../image/unicef.png";

const EORE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="eore">
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
          <h3>Explosive Ordnance Risk Education</h3>
          <p>
            UNICEF Azerbaijan is working closely with the Mine Action Agency of
            the Republic of Azerbaijan (ANAMA) and the Ministry of Education to
            implement an Explosive Ordnance Risk Education ( EORE ) programme in
            the most affected areas and IDP communities. The KAP survey hasn’t
            been conducted yet by any organization or governmental institution,
            therefore the study is aimed to collect comprehensive and up - to -
            date data to understand the current needs of EORE in supporting
            programme design by conducting baseline and endline studies for
            further monitoring, tracking and reporting on the progress made
            throughout the programme implementation cycle
          </p>
          <p>
            UNICEF Azerbaijan Country Office (CO) has hired Evidence for
            Solutions (E4S) to implement the endline KAP survey on Explosive
            Ordnance Risk Education.
          </p>
          <p>
            Within this assignment, we were expected to recruit project
            personnel, prepare all the logistics for the fieldwork, provide the
            enumerators with the necessary training an d tools and deploy to the
            selected districts to work in communities and target groups assigned
            to them
          </p>

          <h4>Methodology</h4>

          <ul>
            <li>
              The survey includes both qualitative and quantitative data
              collection methods. The quantitative data were collected by using
              the SurveyToGo platform, the same software that was used in the
              baseline survey. The surveyors collected data from schoolchildren
              aged 6 - 11, 12 - 17 and adults aged +18. The selection of
              schoolchildren was on a voluntary basis and schoolchildren
              studying in different cla sses were randomly selected according to
              the quota in each district.
            </li>
            <li>
              For the qualitative part of the surv ey, we conducted 9 Focus
              Group Discussions in 9 districts (Aghdam, Tartar, Fuzuli.
              Goranboy, Agdjabadi, Beylagan, Goygol, and Dashkasan) with
              schoolchildren and adults by interviewing in a total of 72
              participants (8 participants in each group). Unlike las t year,
              this year 6 - 7 - year - old children were also the participants
              in the Focus Group Discussions. The Focus Group Discussions for
              schoolchildren w as conducted in the schools, and FGD for adults
              were mainly conducted in administrative buildings of the comm
              unity
            </li>
            <li>
              The list of people for the Key Informant Interviews was provided
              by UNICEF and 5 experts and individuals with deep insight into the
              mine risk - related issues were interviewed. The participants of
              both Focus Group Discussions and Key Informant Interviews wer e
              informed about the voice recording and their consent was obtained
            </li>
          </ul>
        </div>
        <div className="partners">
          <div className="container">
            <h2>Partners</h2>
            <img src={Unicef} alt="" />
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default EORE;
