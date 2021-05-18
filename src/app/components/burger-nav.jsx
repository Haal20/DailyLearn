import React from 'react';
import { Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
//fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
//view components
import { AboutUs } from './about-us.jsx';
import { Profil } from './profil.jsx';
import { TeacherContacts } from './teacher-contacts.jsx';

export class BurgerNav extends React.Component {
    constructor(p) {
        super(p);
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
            <div className='burgerNav'>
                <button className="button is-small is-rounded" onClick={this.handleClick}>
                    <span className="navbar-burger is-active" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                {this.props.children}
                <div id="navMenu" className="navbar-menu is-active">
              
                <div>
                    <nav>
                    <div className="burgerNav">
              
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
                                    <FontAwesomeIcon icon={faChalkboardTeacher} /> Lärare
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="burgerContent">
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                        <Route path='/aboutUs'>
                            <AboutUs/>
                        </Route>
                        <Route path='/profil'>
                            <Profil/>
                        </Route>
                        <Route path='/teacherContacts'>
                            <TeacherContacts/>
                        </Route>
                
                    </div>
                    </nav>
                    </div>
                   
                </div>
            </div>
           
            );
        } 

        return(
        <div className='burgerNav'>
            <button className="button is-small is-rounded" onClick={this.handleClick}>
                <span className="navbar-burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
            {this.props.children}
        </div>
        );
    }
}

BurgerNav.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};