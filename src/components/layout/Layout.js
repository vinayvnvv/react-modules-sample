import React, { Component } from 'react'
import './Layout.css';

import Header from './../header/Header';

class LayoutApp extends Component {

  render() {
    return (
      <div className="app-layout">
        <Header />
        <div className="app-content" style={{ height: '2000px' }}>
          Content goes here..
        </div>
        
      </div>
    );
  }
}

export default LayoutApp;
