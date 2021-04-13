import React from 'react'
import BurgerMenu from './burger-menu';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggel: false
        };
    }

    handleClick() {
        console.log('Clicked burger');
        //isToggle=true otherwise isToggle=false
      }


    render() {
        return (
            <div className="Header">
            <BurgerMenu onClick={this.handleClick} />
            <h1>Tisdag</h1>
            <hr></hr>
            </div>
        );
    }
}

export default Header