import React from 'react'
import BurgerMenu from './burger-menu';

class Header extends React.Component{
    render() {
        return (
            <div className="Header">
                <BurgerMenu />
            <hr></hr>
            </div>
        );
    }
}

export default Header