import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamGen from './img/TeamGen.JPG';
import './style.css';

function TeamGenApp () {

return (

    <div class="card">
              <img src={TeamGen} class="card-img-top" alt="Password Generator screenshot"/>
              <div class="card-body">
                  <h5 class="card-title">Team Generator</h5>
                  <p class="card-text">Team Generator is a Node.js application that allows a user to create an web page with team member profiles after answering a series of Inquirer prompts.</p>
                  <a href="https://github.com/chidinmanze/teamgenerator" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
                </div>
              
            </div>
)


};

export default TeamGenApp;