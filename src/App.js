import logo from './logo.svg';
import './App.css';

import News from "./components/News";
import SearchNews  from './components/SearchNews';

function App() {
  return (
    <div className="App">
     <div><h2>News Application</h2></div>
     <div>
      <News />
      </div>
     
    </div>
  );
}

export default App;
