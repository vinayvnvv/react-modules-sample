import React, { Component } from 'react'
import './Layout.css';
import { Row, Col } from 'antd';

import Future from './future/Future'


import Header from './../header/Header';

class LayoutApp extends Component {

  render() {
    return (
      <div className="app-layout">
        <Header />
        <div className="app-content" style={{ height: '2000px' }}>
          <div className="app-container">
              <div className="app-banner"></div>
              <Row type="flex" className="app-main" justify="center">
                <Col md={20} className='app-main-box'>
                  <Future/>
                </Col>
              </Row>
          </div>
        </div>
        
      </div>
    );
  }
}

export default LayoutApp;
