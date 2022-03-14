// this component is a generic card. From facility personalize
import React from 'react';
import './style.css'
import { AiFillCaretUp } from 'react-icons/ai';

const Robotcard = () => {
  return (
    <div id="container-card">
      <div id="card-subcontainer1">
        <div className="div-flex div-titles">
          <p>Título do Robô</p>
          <div id="state">
            <span id="green-ball"></span>
            <p>Em execução</p>
          </div>
        </div>
        <div id="robot-id">#1792301</div>
        <div className="div-flex">
          <p className="p-infos">Pessimista</p>
          <p className="p-infos">WIN%</p>
          <p className="p-infos">Price action</p>
        </div>
      </div>
      <div id="card-subcontainer2">
        <div id="day">
          30
        </div>
        <div id="type-action">
          <p id="asset">WING20</p>
          <p id="type-action-p">Compra</p>
        </div>
        <div id="profit-container">
          <p>114.093.33</p>
          <div id="profit">
            <AiFillCaretUp id="arrow"/>
            <p>R$92,33</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Robotcard;
