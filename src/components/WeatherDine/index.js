import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDine from "./img/WeatherDine.JPG";
import './style.css';

function WeatherDineApp () {

return ( 

    <div class="card">
        <img src={WeatherDine} class="card-img-top" alt="WeatherDine screenshot"/>
        <div class="card-body">
            <h5 class="card-title">WeatherDine</h5>
            <p class="card-text">WeatherDine is a website that helps travelers make their travel plans a little smoother by providing weather and restaurants information when a city is searched.S</p>
            <a href="https://chidinmanze.github.io/project1/" target="_blank"><button type="button" class="btn btn-dark">WeatherDine Site</button></a>
            <a href="https://github.com/chidinmanze/project1" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
        </div>
    </div>

)



}

export default WeatherDineApp;