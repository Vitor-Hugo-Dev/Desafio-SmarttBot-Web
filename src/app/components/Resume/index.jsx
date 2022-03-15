import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Paperline from '../PaperLine';
import './style.css';
import robotRequests from '../../../services/robotServices';

const Resume = () => {
  const [overView, setOverView] = useState({
    data: { papers: [], transactions: '', moviment_summary: 0 },
  });

  useEffect(() => {
    getOverviews();
  }, []);

  const getOverviews = async () => {
    const response = await robotRequests.getOverviews();
    setOverView(response);
  };
  const { papers, transactions, moviment_summary } = overView.data;

  return (
    <div className="resume">
      <div className="resume-infos">
        <div id="info1">
          <p id="info1-title">Resumo geral operações</p>
          <div id="info1-container">
            <p id="info1-subtitle">Resumo de movimentação</p>
            <p id="info1-value">{`${
              moviment_summary < 0 ? '-' : ''
            }R$${moviment_summary}`}</p>
          </div>
        </div>
        <div id="info2">
          <p id="info2-subtitle">Total de transações realizadas</p>
          <p id="info2-value">{transactions}</p>
        </div>
      </div>
      <div id="resume-hr" />
      <div id="papers">
        <p id="papers-title">Papéis negociados</p>
        <div id="papers-papers">
          <div>
            {papers.map(({ name, trasactions }) => (
              <Paperline
                key={name + trasactions}
                paper={{ name, trasactions }}
              />
            ))}
          </div>
          <div>
            {overView.data.papers.map(({ name, trasactions }) => (
              <Paperline
                key={name + trasactions}
                paper={{ name, trasactions }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Resume.propTypes = {
  overView: PropTypes.shape({
    papers: PropTypes.array.isRequired,
    transactions: PropTypes.string.isRequired,
  }),
};

export default Resume;
