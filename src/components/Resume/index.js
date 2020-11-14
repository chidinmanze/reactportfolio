import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ResumeDoc from './ChidinmaNzeResume2020.pdf'


function ResumeFile () {

return (
    <div class="row" id="resume">
      <div class="col">
        <h2 id="resume-header">Resume</h2>
              <a href={ResumeDoc} target="_blank" 
              id="get-resume"><button type="button" class="btn btn-primary">
                Click here to view my resume</button></a>
      </div>
    </div>  

);


}

export default ResumeFile;