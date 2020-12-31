import './App.css';
import {CardConfig} from './config'
import Components from './components'

function App() {
  return (
    <div className="app">
      {CardConfig.map((card, index) => Components(card, index))}
    </div>
  );
}

export default App;
