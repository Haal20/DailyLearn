import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export class ToDoObject extends React.Component {
    constructor(p){
        super(p);
    }
    render() {
        return (
            <Link to={'/todo/' + this.props.todo.id}>
            <div className='todoObj'>
                <li> 
                    {this.props.todo.assignmentType}: {this.props.todo.assignmentName}<br/>
                    0/{this.props.todo.StudyTime} min<br />
                </li>
            </div>
            </Link>
        );
    }
}


ToDoObject.propTypes = {
    todo: PropTypes.object
  };