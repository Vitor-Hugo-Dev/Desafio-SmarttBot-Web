// this component render a informations resume. Adn stay later of Header.
import React from 'react';
import Paperline from "../PaperLine";
import './style.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-infos">
        <div id="info1">
          <p id="info1-title">Resumo geral operações</p>
          <div>
            <p id="info1-subtitle">Resumo de movimentação</p>
            <p id="info1-value">-R$220,00</p>
          </div>
        </div>
        <div id="info2">
          <p id="info2-subtitle">Total de transações realizadas</p>
          <p id="info2-value">443</p>
        </div>
      </div>
      <div id="resume-hr" />
      <div id="papers">
        <p id="papers-title">Papéis negociados</p>
        <div id="papers-papers">
          <div>
          {[1, 2, 3].map(() => (<Paperline />))}
          </div>
          <div>
          {[1, 2, 3].map(() => (<Paperline />))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
