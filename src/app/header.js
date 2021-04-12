import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component{
    constructor () {
        super();
        // propps are assigned here (initiate components props here)
        this.state = {
            //components props should be kept here (message is one prop)
            message: "(state message in state one)"
        }
    }
    
    render() {
        console.log(1);
        //What is rendered in DOM
        return (<div className="StateOne">
            <h1>Hello World! {this.state.message} </h1>
            </div>);
    }
}