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
