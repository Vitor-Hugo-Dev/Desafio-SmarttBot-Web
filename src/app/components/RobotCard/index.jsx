import React from 'react';
import PropTypes from "prop-types"
import './style.css';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';

const Robotcard = (props) => {

  const {
    paper: {
      robot_id,
      type,
      robot,
      profit,
      paper_value,
      position,
    },
  } = props;

  return (
    <div id="container-card">
      <div id="card-subcontainer1">
        <div className="div-flex div-titles">
          <p>{String(robot.title).slice(0, 14)}</p>
          <div id="state">
            <span id="green-ball"></span>
            <p>Em execução</p>
          </div>
        </div>
        <div id="robot-id">{`#${robot_id}`}</div>
        <div className="div-flex">
          <p className="p-infos">Pessimista</p>
          <p className="p-infos">WIN%</p>
          <p className="p-infos">Price action</p>
        </div>
      </div>
      <div id="card-subcontainer2">
        <div id="day">{position}</div>
        <div id="type-action">
          <p id="asset">WING20</p>
          <p id="type-action-p">{type === 0 ? 'Venda' : 'Compra'}</p>
        </div>
        <div id="profit-container">
          <p>{paper_value}</p>
          <div id="profit">
            {profit > 0 ? (
              <AiFillCaretUp id="arrow" className="green-color" />
            ) : (
              <AiFillCaretDown id="arrow" className="red-color" />
            )}
            {profit > 0 ? (
              <p className="green-color">{`${profit < 0 ? '-' : ''}R$${
                profit > 0 ? profit : String(profit).slice(1, profit.length)
              }`}</p>
            ) : (
              <p className="red-color">{`${profit < 0 ? '-' : ''}R$${
                profit > 0 ? profit : String(profit).slice(1, profit.length)
              }`}</p>
            )}
          </div>
        </div>
      </div>
      <div id="card-subcontainer3">
        <div id="daily-balance">
          <div id="daily-balance-title">
            <p>Saldo diário</p>
            <BsChevronDown id="arrow-down" />
          </div>
          <p>-R$220,00</p>
        </div>
        <div id="day-trades">
          <p id="day-trades-title">Trades no dia</p>
          <p id="day-trades-num">7</p>
        </div>
      </div>
    </div>
  );
};

Robotcard.propTypes = {
  paper: PropTypes.object.isRequired
}

export default Robotcard;
