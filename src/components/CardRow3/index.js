import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import PedalPalsApp from '../PedalPals';
import NoteTakerApp from '../NoteTaker';
import TeamGenApp from '../TeamGen';


function CardRow3() {
  return (
    
    <div class="row" id="third-projectcards">
          <div class="card-group">
            <PedalPalsApp/>
            <NoteTakerApp/>
            <TeamGenApp/>
          
            </div>
    </div>
  );
}

export default CardRow3; 