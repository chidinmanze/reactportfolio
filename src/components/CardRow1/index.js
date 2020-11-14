import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import WeatherDineApp from '../WeatherDine';
import CodingQuizApp from "../CodingQuiz";
import PassGenApp from "../PassWordGenerator";

function CardRow1() {
  return (
    
    <div className="row" id="projectcards">
   
      <div className="card-group">
        <WeatherDineApp />
        <CodingQuizApp />
        <PassGenApp />
      </div>
    </div>
  );
}

export default CardRow1; 