// this page rendes all components
import React from 'react';
import Addrobotinput from "../../components/AddRobotInput";
import Header from "../../components/Header";
import Resume from "../../components/Resume";
import Robotactions from "../../components/RobotActions";
import './style.css'

const Mainpage = () => {
  return (
    <div className="MainPage">
      <Header/>
      <Resume />
      {/* <Addrobotinput />
      <Robotactions /> */}
      
    </div>
  );
}

export default Mainpage;
