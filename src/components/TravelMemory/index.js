import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Travel from './img/Travel.JPG';
import './style.css';

function TravelApp () {

return (

    <div className="card">
              <img src={Travel} className="card-img-top" alt="Travel Portfolio screenshot"/>
              <div class="card-body">
                <h5 class="card-title">Responsive Travel Portfolio</h5>
                <p class="card-text">The goal of this project was to create a responsive portfolio website. I did this using the Bootsrap grid system. The site displays well on devices of all sizes.</p>
                <a href="https://chidinmanze.github.io/travelmemoryportfolio/index.html" target="_blank"><button type="button" class="btn btn-dark">Travel Portfolio</button></a>
                <a href="https://github.com/chidinmanze/travelmemoryportfolio" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
              </div>
            </div>
)


};

export default TravelApp;