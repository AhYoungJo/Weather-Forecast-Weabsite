import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Pages/Routes';
import Globalstyle from './Styles/Globalstyle'

function App() {
  return (
    <div>
      <h1>왜 아무것도 안 뜨지</h1>
      <Globalstyle />
      <Router>
        <RoutesComponent />
      </Router>
    </div>
  );
}

export default App;