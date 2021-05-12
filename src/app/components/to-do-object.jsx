import React from 'react';
import PropTypes from 'prop-types';

export class ToDoObject extends React.Component {
    constructor(p){
        super(p);
    }
    render() {
        return (
            <div>
                <li>
                    <button> {/* TODO: Gör så man kommer till todos egen-vy */}
                    id: {this.props.todo.id}<br/>
                    type: {this.props.todo.assignmentType}<br/>
                    name: {this.props.todo.assignmentName}<br/>
                    study time: {this.props.todo.StudyTime}<br />
                    completed: {this.props.todo.completed? 'ja':'nej'}
                    </button>
                </li>
            </div>
        );
    }
}

ToDoObject.propTypes = {
    todo: PropTypes.object
  };