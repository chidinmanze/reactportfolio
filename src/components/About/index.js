import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Chidinma from './img/Chidinma.jpg';
import githublogo from './img/githublogo.png';
import linkedinlogo from './img/linkedinlogo.jpg';


function About () {

return (
    <div classnName="row" id="about">
    <div className="col-sm-2  col-md-8 col-lg-12">
      <h2 id="about">About</h2>
      <img src={Chidinma} alt="Picture of Chidinma Nze" id="me"/>
      <p>Hello, I'm Chidinma Nze, web developer earning a certificate in full-stack web development from Michigan State University. In addition to HTML, CSS, and Javascript, I am learning the MERN stack, (MongoDB, Express.js, React.js, Node.js).
      </p>
      <p>Visit my LinkedIn and GitHub pages to learn more about me:</p>
      <a href="https://github.com/chidinmanze" target="_blank"><img src={githublogo} alt="gitHublogo"/></a>
      <br/>
      <br/>
      <a href="https://www.linkedin.com/in/cnze/" target="_blank"><img src={linkedinlogo} alt= "LinkedIn logo"/></a>
      
      <br/>
    </div>
    </div>


);


}

export default About;