import React from 'react'
import BurgerMenu from './burger-menu';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggle: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Clicked burger');
        //isToggle=true otherwise isToggle=false
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


    render() {
        return (
            <div className="Header">
                <button onClick={this.handleClick}>
                    <BurgerMenu isToggle={this.state.isToggle}/>
                </button>
            <h1>Tisdag</h1>
            <hr></hr>
            </div>
        );
    }
}

export default Header