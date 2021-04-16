import React from 'react'

class GameMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <button className="button" onClick={this.props.onClick}>
                <span className="icon">
               <i class="fas fa-user-friends">Spel</i>
               </span>
            </button>
        );
    }
}

export default GameMap