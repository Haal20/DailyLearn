import React from 'react'

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        };
    }

    render() {
        return (
            <button className="button" onClick={this.props.onClick}>
                <span className="icon">
                <i className="fas fa-home">Hem</i>
                </span>
            </button>
        );
    }
}

export default ToDoList