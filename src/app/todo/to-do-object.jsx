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
                    title: {this.props.todo.title}<br/>
                    completed: {this.props.todo.completed? 'ja':'nej'}<br/><br/>
                </li>
            </div>
        );
    }
}