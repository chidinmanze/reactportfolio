import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDashboard from './img/WeatherDashboard.JPG';
import './style.css';

function WeatherDashboardApp () {

return (

    <div class="card">
              <img src={WeatherDashboard} class="card-img-top" alt="Weather Dashboard screenshot"/>
              <div class="card-body">
                <h5 class="card-title">Weather Dashboard</h5>
                <p class="card-text">The Weather Dashboard allows users to get current and forecasted weather for the next five days when searching any city.</p>
                <a href="https://chidinmanze.github.io/weatherdashboard/" target="_blank"><button type="button" class="btn btn-dark">Weather Dashboard</button></a>
                <a href="https://github.com/chidinmanze/weatherdashboard" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
              </div>
            </div>
)


};

export default WeatherDashboardApp;