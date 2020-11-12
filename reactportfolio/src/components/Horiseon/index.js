import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HoriseonPic from './img/Horiseon.JPG';
import './style.css';

function HoriseonSite () {

return (

    <div class="card">
              <img src={HoriseonPic} class="card-img-top" alt="Horiseon website screenshot"/>
              <div class="card-body">
                <h5 class="card-title">Horiseon Code Refactor</h5>
                <p class="card-text">For this project, the primary goal was to make the HTML and CSS files readable and well-organized.</p>
                <a href="https://chidinmanze.github.io/horiseondemo/" target="_blank"><button type="button" class="btn btn-dark">Horiseon Site</button></a>
                <a href="https://github.com/chidinmanze/horiseondemo" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
              </div>
            </div>
)


};

export default HoriseonSite;