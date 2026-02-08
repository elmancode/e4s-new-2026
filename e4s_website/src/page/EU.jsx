import React, { useEffect } from "react";
import Unicef from "../image/unicef.png";
import Europe from "../image/europe.png";

const EU = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="eu">
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
          <h3>EU Endline Survey</h3>
          <p>
            The Endline survey on “Development of community and family-based
            integrated social services for the most vulnerable children in
            Azerbaijan” was conducted by Evidence for Solutions in cooperation
            with UNICEF Azerbaijan. The preparation of the survey started in
            April 2022.
          </p>
          <p>
            Technical preparations – translation of the questionnaire and the
            training manual, scripting the questionnaire into CAPI system,
            numerous piloting and 2-day training in Baku and Aghjabadi,
            discussions and amending the documents based on the piloting
            results, and internal testing continued throughout April 2022.
            Considering that it was a piloting of the follow-up survey, and
            there are no major changes from the baseline (or first round)
            survey, there were not major challenges on questionnaire design and
            translation.
          </p>
          <p>
            A random walking protocol was used in the survey. The step size was
            4 in the villages and settlements, and 10 in the urban areas and
            apartments. Furthermore, the households with children over 18 were
            not allowed to participate in the survey. The questionnaire included
            specific questions that only mothers, or caregivers of the children
            would know the answer to. Therefore, mothers aged between 15 and 49
            years were selected to be in the interview.
          </p>


          <h2>Fieldwork</h2>
          <ul>
            <li>Selection of households and respondents </li>
            <li>Format of questionnaire</li>
            <li>Working staff </li>
            <li>Data collection </li>
            <li>Quality control </li>
            <li>Spot-checks </li>
          </ul>
        </div>
        <div className="partners">
          <div className="container">
            <h2>Partners</h2>
            <img src={Europe} alt="" className="europe"/>
            <img src={Unicef} alt="" />
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default EU;
