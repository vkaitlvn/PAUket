import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />


      </Switch>
      
    </BrowserRouter>
  );
}

export default App;

