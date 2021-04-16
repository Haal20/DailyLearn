import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

//using bulma for styling
class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Clicked burger');
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
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand">

                        <button className="button is-small is-rounded" onClick={this.handleClick}>
                            <span className="navbar-burger is-active" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        </div>
                        <div id="navMenu" className="navbar-menu is-active">
                            <div className="navbar-end">
                                <a href="#" className="navbar-item"><FontAwesomeIcon icon={faAddressCard} /> Om oss</a>
                                <a href="#" className="navbar-item"><FontAwesomeIcon icon={faUserCircle} /> Profil</a>
                                <a href="#" className="navbar-item"><FontAwesomeIcon icon={faChalkboardTeacher} /> Lärarkontakter</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } 

        return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-brand">

                <button className="button is-small is-rounded" onClick={this.handleClick}>
                    <span className="navbar-burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
                
                </div>
                <div id="navMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <a href="#" className="navbar-item">Om oss</a>
                        <a href="#" className="navbar-item">Profil</a>
                        <a href="#" className="navbar-item">Lärarkontakter</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default BurgerMenu