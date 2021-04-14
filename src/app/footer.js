import React from 'react'
import ToDoList from './to-do-list.js'
import GameMap from './game-map.js'
import StudyTips from './study-tips.js'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
        this.toDoList = this.toDoList.bind(this);
        this.gameMap = this.gameMap.bind(this);
        this.studyTips = this.studyTips.bind(this);
    }

    toDoList(){
        console.log('Clicked Hem');
    }

    gameMap(){
        console.log('Clicked Gemensamma');
    }
    
    studyTips(){
        console.log('Clicked fördjupning');
    }

    render() {
        return (
            <div>
                <hr></hr>
                <button onClick={this.toDoList}>
                    hem
                </button>
                <button onClick={this.gameMap}>
                    gemensamma
                </button>
                <button onClick={this.studyTips}>
                    fördjupning
                </button>
            </div>
        );
    }
}

export default Footer