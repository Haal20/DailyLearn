import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from "react-router-dom";
import { AppContext } from "../logic/create-context.js";

export class ToDoObject extends React.Component {
    constructor(p){
        super(p);
    }
    render() {
        return (
            <div className='todoObj'>
                <li>
                    <Link to={'/todo/' + this.props.todo.id}>
                        id: {this.props.todo.id}<br/>
                        type: {this.props.todo.assignmentType}<br/>
                        name: {this.props.todo.assignmentName}<br/>
                        study time: {this.props.todo.StudyTime}<br />
                        completed: {this.props.todo.completed? 'ja':'nej'} <br />
                    </Link>
                    <button onClick={() => this.props.onDeleteSubmit(this.props.todo.id)}>Radera</button>
                </li>
            </div>
        );
    }
}

ToDoObject.contextType = AppContext;

ToDoObject.propTypes = {
    todo: PropTypes.object
  };