import React from 'react'

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        };
    }

    render() {
        return (
            <button onClick={this.props.onClick}>
                hem
            </button>
        );
    }
}

export default ToDoList