import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Dynamic from './components/Dynamic';
function App() {
  return (
    <div className="App">
      
      <Greet name="vetha"/>
      <Welcome name = "vetha"/>
      <Dynamic/>
    </div>
  );
}

export default App;
