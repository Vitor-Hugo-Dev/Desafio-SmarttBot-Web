// this page rendes all components
import React from 'react';
import Addrobotinput from "../components/AddRobotInput";
import Header from "../components/Header";
import Resume from "../components/Resume";
import Robotactions from "../components/RobotActions";

const Mainpage = () => {
  return (
    <div>
      <Header className="header"/>
      <Resume />
      <Addrobotinput />
      <Robotactions />
      
    </div>
  );
}

export default Mainpage;
