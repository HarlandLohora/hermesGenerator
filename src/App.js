import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component = {Main}/>
          <Route path="/dashboard" component = {Dashboard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
