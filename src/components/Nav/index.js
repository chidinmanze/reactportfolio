import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  

  return (
    <ul class="nav justify-content-center">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#about"
                    >About</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#projects"
                  
                  >Projects</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#resume"
                  
                  >Resume</a
                >
              </li>
              
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#contact"
                  
                  >Contact</a
                >
              </li>
            </ul>

  );
}

export default Nav;
