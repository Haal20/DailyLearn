import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

class GameMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <button className="button is-large" onClick={this.props.onClick}>
                <span className="icon">
                <FontAwesomeIcon icon={faUserFriends} />
               </span>
            </button>
        );
    }
}

export default GameMap