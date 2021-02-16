import React, { Component } from 'react';
import CourseForm from './components/courseForm';
import CourseList from './components/courseList';

class App extends Component {
  state = { 
    courses:[
      {name:"html"},
      {name:"css"},
      {name:"javascript"},
    ],
    current: ''
  }

  updateCourse= (e) => {
    this.setState({
      current: e.target.value
    });
  }

  addCourse= (e) => {
  e.preventDefault();
  let current= this.state.current;
  let courses= this.state.courses;
 
  if(current){
    courses.push({name: current});
  }

  this.setState({
    courses,
    current: ''
  })
  }

  editCourse= (index, value) => {
    let courses= this.state.courses;
    let course= courses[index];

    course['name']= value;
    this.setState({courses});
  }

  deleteCourse= (index) => {
    let courses= this.state.courses;
    courses.splice(index, 1);
    this.setState({courses});
  }

  render() { 
    const {courses}= this.state;
    const courseList= courses.map((course, index) => {
      return <CourseList nameCourse={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })
    return ( 
      <section className="App">
        <h2>Add New Course</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        <ul>
          {this.state.courses.length ? courseList : <h2>You have no courses</h2>}
        </ul>
        
      </section>
     );
  }
}
 
export default App;