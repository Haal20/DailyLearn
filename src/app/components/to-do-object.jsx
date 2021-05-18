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
                    id: {this.props.todo.id}<br/>
                    type: {this.props.todo.assignmentType}<br/>
                    name: {this.props.todo.assignmentName}<br/>
                    study time: {this.props.todo.StudyTime}<br />
                    completed: {this.props.todo.completed? 'ja':'nej'} <br />
                </li>
            </div>
            </Link>
        );
    }
}


ToDoObject.propTypes = {
    todo: PropTypes.object
  };