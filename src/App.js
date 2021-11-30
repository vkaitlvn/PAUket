import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';

import About from './pages/about';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />

      </Switch>
      
    </BrowserRouter>
  );
}

export default App;

