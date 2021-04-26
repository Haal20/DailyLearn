import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
//Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
//Import the views
import ToDoList from './to-do-view'
import GameMap from './game-map-view'
import StudyTips from './study-tips-view'

class Footer extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <nav>
                    <div className="footerContent">
                    <Switch>
                        <Route path='/home'>
                            <ToDoList/>
                        </Route>
                        <Route path='/gameMap'>
                            <GameMap/>
                        </Route>
                        <Route path='/studyTips'>
                            <StudyTips/>
                        </Route>
                    </Switch>
                    </div>
                    <div className="footerNav">
                    <hr/>
                        <ul>
                            <li>
                                <Link to='/home'>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faHome} />
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/gameMap'>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faUserFriends} />
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/studyTips'>
                                    <span className="icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </Router>
        );
    }
}

export default Footer