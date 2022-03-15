import PropTypes from "prop-types"
import React from 'react';
import './style.css';

const Paperline = (props) => {
  const { paper } = props;
  return (
    <div id="paper">
      <div id="paper-name">{paper.name}</div>
      <hr  id="space"/>
      <div id="paper-transactions">
        <p id="transaction-quantity">{paper.trasactions}</p>
        <p id="transaction-name">Transações</p>
      </div>
    </div>
  );
};

Paperline.propTypes = {
  paper: PropTypes.object.isRequired
}

export default Paperline;
