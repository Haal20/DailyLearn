import React from 'react';
import ReactDOM from 'react-dom';

export class StateOne extends React.Component{
    constructor () {
        super();
        // propps are assigned here
        this.state = {
            message: "(state message)"
        }
    }
    
    render() {
        console.log(1);
        //What is rendered in DOM
        return <div className="StateOne">
            <h1>Hello World! {this.state.message} </h1>
            </div>
    }
}

ReactDOM.render(<StateOne />, document.getElementById('root'))