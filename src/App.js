import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Path from './components/path/Path';
import CarrerList from './components/carreer-list/CarreerList';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/path">Path design</Link></li>
            <li><Link to="/list">List design</Link></li>
          </ul>

          <hr/>

          <Route path="/path" component={Path}/>
          <Route path="/list" component={CarrerList}/>
        </div>
      </Router>
    );
  }
}

export default App;
