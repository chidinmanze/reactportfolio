import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordGen from './img/PasswordGenerator.JPG';
import './style.css';

function PassGenApp () {

return (

    <div class="card">
              <img src={PasswordGen} class="card-img-top" alt="Password Generator screenshot"/>
              <div class="card-body">
                <h5 class="card-title">Password Generator</h5>
                <p class="card-text">The password generator in this project is designed to allow users to generate a uniqe password between 8 and 128 characters. </p>
                <a href="https://chidinmanze.github.io/passwordgenerator/" target="_blank"><button type="button" class="btn btn-dark">Password Generator</button></a>
                <a href="https://github.com/chidinmanze/passwordgenerator" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
              </div>
            </div>
)


};

export default PassGenApp;