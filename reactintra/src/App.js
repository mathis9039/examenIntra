import Home from './Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className= "App">
        <Route path="/" exact component={Home}/>
      </div>
    </Router>
  );
}

export default App;
