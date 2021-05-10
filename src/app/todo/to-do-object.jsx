import React from 'react'

export class ToDoObject extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                    id: {this.props.todo.id}<br/>
                    type: {this.props.todo.assignmentType}<br/>
                    name: {this.props.todo.assignmentName}<br/>
                    study time: {this.props.todo.StudyTime}<br />
                    completed: {this.props.todo.completed? 'ja':'nej'}<br/><br/>
                </li>
            </div>
        );
    }
}