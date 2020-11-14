import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import WeatherDashboardApp from "../WeatherDashBoard";
import TravelApp from "../TravelMemory";
import HoriseonSite from "../Horiseon";


function CardRow2() {
  return (
    
    <div class="row" id="second-projectcards">
          <div class="card-group">
            <WeatherDashboardApp/>
            <TravelApp/>
            <HoriseonSite/>
          
            </div>
    </div>
  );
}

export default CardRow2; 