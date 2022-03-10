import './App.css';
import Mainpage from "./app/pages/MainPage";
import Provider from "./context/provider";

function App() {

  return (
  <Provider>
    <div className="App">
      <Mainpage/>
    </div>
  </Provider>  
  );
}

export default App;
