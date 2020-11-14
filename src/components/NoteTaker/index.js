import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteTaker from './img/Notetaker.JPG';
import './style.css';

function NoteTakerApp () {

return (

    <div class="card">
              <img src={NoteTaker} class="card-img-top" alt="Password Generator screenshot"/>
              <div class="card-body">
                  <h5 class="card-title">Note Taker</h5>
                  <p class="card-text">Note Taker is a web application that allows users to creates, save, retrieve, and delete notes. </p>
                  <a href="https://afternoon-tundra-38466.herokuapp.com/" target="_blank"><button type="button" class="btn btn-dark">Note Taker</button></a>
                  <a href="https://github.com/chidinmanze/notetakerzz" target="_blank"><button type="button" class="btn btn-dark">Github Repository</button></a>
                </div>
              
            </div>
)


};

export default NoteTakerApp;