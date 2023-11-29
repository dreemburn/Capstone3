import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesContainer from './routes/RoutesContainer';

const App = () => {
  return (
    <Router>
      <RoutesContainer />
    </Router>
  );
};

export default App;

/*
import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Character from "./Character/Character";

function App() {
 return (
    <Router>
      <Switch>
        <Route path="/character" component={Character} />
      </Switch>
    </Router>
 );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Character from './Character/Character';

const App = () => {
 return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/character">Character</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/character" component={Character} />
        </Switch>
      </div>
    </Router>
 );
};

export default App; */