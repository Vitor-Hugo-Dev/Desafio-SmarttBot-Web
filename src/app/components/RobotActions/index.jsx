import React, { useEffect, useState } from 'react';
import robotRequests from "../../../services/robotServices";
import Robotcard from '../RobotCard';
import './style.css';

const Robotactions = () => {
  const [papers, setPapers] = useState([]);

  const getPapers = async () => {
    const response = await robotRequests.getPapers();
    setPapers(response.data);
  };

  useEffect(() => {  
    getPapers();
  }, []);

  return papers.length > 0 ? (
    <div id="container-actions">
      {papers.map((data, index) => (index <= 7 ? <Robotcard key={data.created_at} paper={data} /> : null))}
    </div>
  ) : null;
};

export default Robotactions;
