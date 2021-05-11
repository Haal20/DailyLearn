import React from 'react'
import {
    Route,
    Link
  } from "react-router-dom"
//Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
//Import the views
import { ToDoView } from './todo/to-do-view.jsx'
import { GameMapView } from './game-map-view.jsx'
import { StudyTipsView } from './study-tips-view.jsx'

export class FooterNav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <div>
                    <nav>
                    <div className="footerContent">
                   
                        <Route exact path='/'>
                            <ToDoView 
                                todos={this.props.todos} 
                                todo = {this.props.todo} 
                                todoInput = {this.props.todoInput}
                                onChange={this.props.onChange}
                                onSubmit = {this.props.onSubmit}
                            />
                        </Route>
                        <Route path='/gameMap'>
                            <GameMapView/>
                        </Route>
                        <Route path='/studyTips'>
                            <StudyTipsView/>
                        </Route>
                   
                    </div>
                    <div className="footerNav">
                    <hr/>
                        <ul>
                            <li>
                                <Link to='/'>
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
        );
    }
}