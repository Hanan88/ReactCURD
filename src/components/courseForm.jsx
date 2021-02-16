import React from 'react';
import './course.css';

const CourseForm = (props) => {
    return ( 
            <form onSubmit={props.addCourse}>
                <input type="text" onChange={props.updateCourse} value={props.current} placeholder="Enter the Course"/>
                <button type="submit">Add Course</button>
            </form>
     );
}
 
export default CourseForm;