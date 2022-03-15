// this area from take a new robot
import PropTypes from "prop-types"
import React from 'react';
import './style.css'
import robotIcon from '../../../images/robotIcon.svg';

const Addrobotinput = (props) => {
  return (
    <div id="add-robot">
      <div id="add-robot-icon">
        <img src={robotIcon} alt="icon" />
      </div>
      <div id="add-robot-container">
        <div id="add-robot-button" onClick={() => {props.createRobot(true)}}>Adicionar novo Robô</div>
        <div id="add-robot-text">
          <p id="add-robot-text1"> Você possui</p>
          <p id="add-robot-text2">02 Robôs</p>
          <p>disponíveis</p>
        </div>
      </div>
    </div>
  );
}

Addrobotinput.propTypes = {
  createRobot: PropTypes.func.isRequired
}

export default Addrobotinput;
