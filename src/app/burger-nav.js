import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
//fint awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
//view for nav
import { AboutUs } from './about-us.js'
import { Profil } from './profil.js'
import { TeacherContacts } from './teacher-contacts.js'

export class BurgerNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.state.isToggle == true){
            this.setState({
                isToggle: false
            });    
        } else {
            this.setState({
                isToggle: true
            });    
        }
    }

    render(){
        if (this.state.isToggle == true) {
            return(
            <div>
                <button className="button is-small is-rounded" onClick={this.handleClick}>
                    <span className="navbar-burger is-active" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                <div id="navMenu" className="navbar-menu is-active">
                <Router>
                <div>
                    <nav>
                    <div className="burgerNav">
                    <hr/>
                        <ul>
                            <li>
                                <Link to='/aboutUs' className="navbar-item">
                                    <span className="icon">
                                    <FontAwesomeIcon icon={faAddressCard} /> Om oss
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/profil' className="navbar-item">
                                    <span className="icon">
                                    <FontAwesomeIcon icon={faUserCircle} /> Profil
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/teacherContacts' className="navbar-item">
                                   <span className="icon">
                                    <FontAwesomeIcon icon={faChalkboardTeacher} /> Lärarkontakter
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <hr></hr>
                    </div>
                    <div className="burgerContent">
                    <Switch>
                        <Route path='/aboutUs'>
                            <AboutUs/>
                        </Route>
                        <Route path='/profil'>
                            <Profil/>
                        </Route>
                        <Route path='/teacherContacts'>
                            <TeacherContacts/>
                        </Route>
                    </Switch>
                    </div>
                    </nav>
                    </div>
                    </Router>
                </div>
            </div>
           
            );
        } 

        return(
        <div>
            <button className="button is-small is-rounded" onClick={this.handleClick}>
                <span className="navbar-burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
            <hr></hr>
        </div>
        );
    }
}