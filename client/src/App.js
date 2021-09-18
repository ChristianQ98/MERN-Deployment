import Dashboard from './components/Dashboard';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import ShowPirate from './components/ShowPirate';
import PirateForm from './components/PirateForm';

function App() {
  return (
    <div>
      <Redirect to="/pirates" from="/"/>
      <Switch>
        <Route exact path="/pirate/new">
          <PirateForm/>
        </Route>
        <Route exact path="/pirate/:id">
          <ShowPirate/>
        </Route>
        <Route exact path="/pirates">
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
