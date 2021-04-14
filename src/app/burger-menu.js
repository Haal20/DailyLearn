import React from 'react'

//using bulma for styling
class BurgerMenu extends React.Component {

    render(){
        if (this.props.isToggle == true) {
            return(
                <div className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                           
                            <span className="navbar-burger is-active" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                           
                        </div>
                        <div id="navMenu" className="navbar-menu is-active">
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

        return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <span className="navbar-burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
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