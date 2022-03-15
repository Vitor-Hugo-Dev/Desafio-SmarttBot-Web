import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './style.css';
import { IoIosClose } from 'react-icons/io';
import robotRequests from '../../../services/robotServices';

const Modal = (props) => {
  const { createRobot } = props;
  const closeModal = () => {
    createRobot(false);
  };

  const [robot, setRobot] = useState({
    title: '',
    mode: 0,
    strategy_id: '2',
    initial_capital: '',
    simulation: 0,
    broker_id: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRobot({ ...robot, [name]: value });

  };
  const createRobotReq = async (e) => {
    e.preventDefault();
     await robotRequests.createRobot(robot);
     createRobot(false);
  }

  const { title, initial_capital } = robot;

  return (
    <div className="modal">
      <form action="" method="post">
        <div className="container">
          <div className="sub-container">
            <div id="div-title-1">
              <p id="title-1">Adicionar novo Robô</p>
              <IoIosClose id="close-button" onClick={closeModal} />
            </div>
            <p id="title-2">Vamos criar seu robô</p>
            <p id="title-3">Preencha as informações abaixo:</p>
            <label htmlFor="product-name">
              <div className="input-title">Nome do produto</div>
              <input
                name="title"
                onChange={handleChange}
                id="product-name"
                type="text"
                value={title}
                placeholder="Nome do produto"
                className="input-field"
              />
            </label>
            <label htmlFor="value">
              <div className="input-title">Capital inicial do robô</div>
              <input
                name="initial_capital"
                onChange={handleChange}
                id="value"
                type="number"
                value={initial_capital}
                placeholder="R$"
                className="input-field"
              />
            </label>
            <p id="title-4">Selecione uma das estratégias abaixo</p>
            <label htmlFor="radio-1" id="radio-1-div">
              <p>Tangram</p>
              <input
                type="radio"
                name="strategy_id"
                onChange={handleChange}
                id="radio-1"
                value="2"
              />
            </label>
            <label htmlFor="radio-2" id="radio-2-div">
              <p>Price Action</p>
              <input
                type="radio"
                name="strategy_id"
                onChange={handleChange}
                id="radio-2"
                value="1"
              />
            </label>
            <div id="div-buttons">
              <button id="button-cancel" onClick={closeModal}>
                Cancelar
              </button>
              <button id="button-post" onClick={createRobotReq}>Criar Robô</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  createRobot: PropTypes.func.isRequired,
};

export default Modal;
