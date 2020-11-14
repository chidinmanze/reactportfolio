import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CodingQuiz from './img/CodingQuiz.JPG';
import './style.css';

function CodingQuizApp () {

return ( 

    <div class="card">
    <img src={CodingQuiz} class="card-img-top" alt="Coding Quiz screenshot"/>
    <div class="card-body">
      <h5 class="card-title">Coding Quiz</h5>
      <p class="card-text">The coding quiz is a short multiple-choice activity where users will answer 7 questions on a few basics of web development.</p>
      <a href="https://chidinmanze.github.io/codingquiz/" target="_blank"><button type="button" class="btn btn-dark">Coding Quiz Site</button></a>
      <a href="https://github.com/chidinmanze/codingquiz" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
    </div>
  </div>
)



}

export default CodingQuizApp;