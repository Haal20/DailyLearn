import React from 'react'
import ToDoList from './to-do-list.js'
import GameMap from './game-map.js'
import StudyTips from './study-tips.js'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <hr></hr>
                {this.props.children}
            </div>
        );
    }
}

export default Footer