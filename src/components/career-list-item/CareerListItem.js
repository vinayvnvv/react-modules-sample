import React, { Component } from 'react';
import './CareerListItem.css';

class CareerListItem extends Component {

  constructor(props) {
    super(props);
  }

  onItemClick() {
    if(this.props.onItemClick)
      this.props.onItemClick(this.props.item, this.props.index);
  }


  render() {
    return (
          <div className={'CareerListItem _item'} onClick={this.onItemClick.bind(this)}>
            <div className="_avtr"  style={ {backgroundImage: "url('" + this.props.item.img + "')"} }>
              <div className="_actnicn"></div>
            </div>
            <div className="_details">
              <div className="_ttl">{this.props.item.title}</div>
              <div className="_subtext">{this.props.item.subtext}</div>
            </div>
          </div>
    );
  }
}

export default CareerListItem;