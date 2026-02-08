import React from "react";
import { Link } from "react-router-dom";
import "../style/components/cardproject.scss";
import {BsArrowRight} from "react-icons/bs"

const CardProject = ({ title, text, more }) => {
  return (
    <div className="card_projects">
      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <Link to="/projects" target="_blank">
        <span>{more}</span>
        <BsArrowRight className="icon"/>
      </Link>
    </div>
  );
};

export default CardProject;
