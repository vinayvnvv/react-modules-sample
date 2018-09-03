import React, { Component } from 'react'
import './App.css';
import './sass/main.css';
import Path from './components/path/Path';
import CarrerList from './components/carreer-list/CarreerList';
import LayoutApp from './components/layout/Layout';
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
          <ul className="_l">
            <li><Link to="/path">Path design</Link></li>
            <li><Link to="/list">List design</Link></li>
            <li><Link to="/layout">Layout</Link></li>
          </ul>

          <Route path="/path" component={Path}/>
          <Route path="/list" component={CarrerList}/>
          <Route path="/layout" component={LayoutApp}/>
        </div>
      </Router>
    );
  }
}

export default App;
