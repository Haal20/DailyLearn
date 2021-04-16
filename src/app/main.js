import React from 'react'
import ToDoView from './to-do-view.js'
import GameMapView from './game-map-view.js'
import StudyTipsView from './study-tips-view.js'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="mainContent">
                {this.props.view === 'toDoView' ? <ToDoView /> : null}
                {this.props.view === 'gameMapView' ? <GameMapView /> : null}
                {this.props.view === 'studyTipsView' ? <StudyTipsView /> : null}
            </div>
        );
    }
}

export default Main