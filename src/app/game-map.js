import React from 'react'

class GameMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.gameMap = this.gameMap.bind(this);
    }

    gameMap(){
        console.log('Clicked Gemensamma');
    }


    render() {
        return (
            <button onClick={this.gameMap}>
                gemensamma
            </button>
        );
    }
}

export default GameMap