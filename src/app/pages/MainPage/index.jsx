import React, { useState } from 'react';
import Addrobotinput from "../../components/AddRobot";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Resume from "../../components/Resume";
import Robotactions from "../../components/RobotActions";
import './style.css'

const Mainpage = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <div className="MainPage">
      <div>{visibleModal === true ? (<Modal createRobot={setVisibleModal}/>) : null}</div>
      <Header/>
      <Resume />
      <Addrobotinput createRobot={setVisibleModal}/>
      <Robotactions /> 
    </div>
  );
}

export default Mainpage;
