import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MiniDrawer from './MiniDrawer';
import RenderCard from './RenderCard';
import Try from './Try';
import RenderQuote from './RenderQuote';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={MiniDrawer}></Route>
          {/* <Route path="/quote" exact render={() => <MiniDrawer RenderComponent={RenderQuote}/>}></Route> */}
          <Route path="/quote" exact component={RenderQuote}></Route>
          {/* <Route path="/" exact component={MiniDrawer}></Route> */}
          {/* <Route path="/try" exact component={Try}></Route> */}
          {/* <Route path="/quote" exact render={<MiniDrawer RenderComponent={RenderQuote}/>}></Route> */}
        </Switch>
      </Router>
      {/* <MiniDrawer RenderComponent={RenderCard}/> */}
    </div>
  );
}

export default App;
