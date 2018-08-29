import React, { Component } from 'react';
import './CourseMap.css';

class CourseMap extends Component {

  constructor(props) {
    super(props);
  }

  onItemClick(item, index) {
    this.props.onItemClick(item, index);
  }


  render() {
    return (
      <div className="_lists">
        {this.props.courses.map((item, index) =>
          <div key={index} className={'_item ' + (item.status===1?'completed ':'') + (item.status===2?'active ':'')} onClick={this.onItemClick.bind(this, item, index)}>
            <div className="_path">
              <svg height="50" width="123" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0 0, 83 0, 100 50, 83 100, 0 100, 17 50, 0 0" />
              </svg>
            </div>
            <div className="_name">{item.name}</div>
          </div>
        )}
      </div>
    );
  }
}

export default CourseMap;