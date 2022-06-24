import React from 'react';
import Mainpage from './app/pages/MainPage';
import Provider from './context/provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Mainpage />
      </Provider>
    </div>
  );
}

export default App;
