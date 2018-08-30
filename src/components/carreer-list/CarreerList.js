import React, { Component } from 'react';
import './CarrerList.css';
import CareerListItem from './../career-list-item/CareerListItem';
import { Row, Col } from 'antd';

interface ICareerList {
  img: string;
  title: string;
  subtext: string;
  acticon: string;
}

interface IState {
  careerList: ICareerList[]
}

class CarrerList extends Component {
  state: IState;
  constructor(props) {
    super(props);
    this.state = {
      careerList: [
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://i.pinimg.com/originals/da/d6/13/dad6133d8cf7f27cedec44669afd60e4.jpg', title: "Law Public safety, corrections, and security", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
            { img: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg', title: "Agriculture, Food, and Natural Resources", subtext: "Agriculture is the cultivation of land and breeding of animals and plants to provide products to sustain and enhance life.", acticon: "agri"},
      ]
    }
  }

  onItemClick(item, index) {
    console.log('clicked', item, 'index:', index)
  }

  render() {
    return (
      <div className="CarrerList">
          <Row type="flex" justify="center" className="_poster">
            <Col className="_ttl">Career Pathways</Col>
          </Row>
          <Row type="flex" justify="center">
            <Col xs={24} sm={22} className="ly-out">
              <Row type="flex" justify="center">
                <Col xs={22} >
                  <Row gutter={60}>
                    {this.state.careerList.map((item, index) =>
                      <Col span={8} xs={24} sm={12} lg={8} key={index} >
                        <CareerListItem item={item} index={index}/>
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    );
  }
}

export default CarrerList;
