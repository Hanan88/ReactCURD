import React, { Component } from 'react';

class CourseList extends Component {
   
    state={
        isEdit: false
    }

    renderCourse= () =>{
        return(
            <li>
                <span>{this.props.nameCourse.name}</span>
                <button onClick= {() => this.toggleState()}>Edit</button>
                <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete</button>
            </li>
        )
    }

    updateCourseItem= (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value)
        this.toggleState()

    }

    renderUpdateForm= () => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input= (v)}} defaultValue={this.props.nameCourse.name}/>
                <button >Update</button>
            </form>
        )
    }

    toggleState=() => {
        let {isEdit}= this.state;
        this.setState({
            isEdit:!isEdit
        })
    }



    render() { 
        let {isEdit}= this.state;
        return ( 
            <React.Fragment>
                {
                    isEdit ? this.renderUpdateForm() : this.renderCourse()
                }
            </React.Fragment>
         );
    }
}
 
export default CourseList;