import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PedalPals from './img/Pedalpals.JPG';
import './style.css';

function PedalPalsApp () {

return (

    <div class="card">
              <img src={PedalPals} class="card-img-top" alt="Password Generator screenshot"/>
              <div class="card-body">
                  <h5 class="card-title">PedalPals</h5>
                  <p class="card-text">PedalPals is an app that allows people in the community to list their bikes for free for people to use.</p>
                  <a href="https://sheltered-temple-43461.herokuapp.com/" target="_blank"><button type="button" class="btn btn-dark">PedalPals</button></a>
                  <a href="https://github.com/chidinmanze/PedalPals" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
                </div>
              
            </div>
)


};

export default PedalPalsApp;