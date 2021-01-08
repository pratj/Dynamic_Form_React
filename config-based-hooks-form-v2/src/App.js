import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RenderCard from './components/RenderCard';
import RenderQuote from './components/RenderQuote';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={RenderCard}></Route>
          <Route path="/quote" exact component={RenderQuote}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
