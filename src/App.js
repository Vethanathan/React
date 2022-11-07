import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Dynamic from './components/Dynamic';
import Count from './components/Count';
function App() {
  return (
    <div className="App">
      <Count />
      <Greet name="vetha">
        <p>hello</p>
      </Greet>
      <Welcome name = "vetha"/>
      <Dynamic/>
    </div>
  );
}

export default App;
