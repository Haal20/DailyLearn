import React from 'react'
import BurgerMenu from './burger-menu';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }



    render() {
        return (
            <div className="Header">
                <BurgerMenu />
            <h1>Tisdag</h1>
            <hr></hr>
            </div>
        );
    }
}

export default Header