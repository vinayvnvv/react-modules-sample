import React, { Component } from 'react';
import './Header.css';
import logo from './../../logo.png'
import { Button } from 'antd';

interface IState {
  isMenuOpen: boolean;
}

class Header extends Component {
  state: IState;
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  render() {
    return (
         <div className={"app-header " + (this.state.isMenuOpen ? 'menu-active' : '')}>
          <div className="h-left">
            <div className="h-logo">
              <img src={logo} alt='logo'/>
            </div>
            <div className="hamburger" onClick={this.toggleMenu.bind(this)}>
              <span/>
              <span/>
              <span/>
            </div>
          </div>
          <div className="h-right">
            <div className="h-item active">Marketplace</div>
            <div className="h-item">Study Groups</div>
            <div className="h-item">Workforce</div>
            <div className="h-item">Sign In</div>
            <div className="h-item"><Button type="primary">Get Started</Button></div>
            <div className="h-item h-divider"><div></div></div>
            <div className="h-item">For Partners</div>
          </div>
         </div>
    );
  }
}

export default Header;