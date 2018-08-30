import React, { Component } from 'react';
import './Path.css';
import CourseMap from './../course-map/CourseMap'

interface Courses {
  name: string;
  id: number;
  status: number;
}

interface IState {
  courses: Courses[]
}

class Path extends Component {
  state: IState;
  constructor(props) {
    super(props);
    this.state = {
      courses: [
                  {name: 'Course 1', id: 1, status: 1},
                  {name: 'Course 2', id: 2, status: 1},
                  {name: 'Course 3', id: 3, status: 1},
                  {name: 'Course 4', id: 4, status: 1},
                  {name: 'Course 5', id: 5, status: 2},
                  {name: 'Course 6', id: 6, status: 0},
                  {name: 'Course 7', id: 7, status: 0},
                  {name: 'Course 8', id: 8, status: 0}
              ]
    };
  }

  onItemClick(item, index) {
    console.log('clicked', item, 'index:', index)
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <CourseMap courses={this.state.courses} onItemClick={this.onItemClick}/>
        </div>
      </div>
    );
  }
}

export default Path;
