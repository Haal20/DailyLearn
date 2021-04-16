import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        };
    }

    render() {
        return (
            <button className="button is-large" onClick={this.props.onClick}>
                <span className="icon">
                <FontAwesomeIcon icon={faHome} />
                </span>
            </button>
        );
    }
}

export default ToDoList