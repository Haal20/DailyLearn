import React from 'react'

class GameMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <button onClick={this.props.onClick}>
                gemenskap
            </button>
        );
    }
}

export default GameMap