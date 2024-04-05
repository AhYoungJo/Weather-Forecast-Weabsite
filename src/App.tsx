import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Pages/Routes';
import Globalstyle from './Styles/Globalstyle'
import {Provider} from 'react-redux';
import store from './Store/Data/Store'

function App() {
  return (
    <Provider store={store}>
      <Globalstyle />
      <Router>
        <RoutesComponent />
      </Router>
    </Provider>
  );
}

export default App;