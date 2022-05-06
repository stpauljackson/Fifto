import './App.css';
import Home from './screens/home'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{height:"96px"}}></div>
      <Home />
    </div>
  );
}

export default App;
