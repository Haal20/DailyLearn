import React from 'react';

export class ConfirmButton extends React.Component {
    constructor(p){
        super(p);
        this.state = {
            confirmed: false,
        }
    }

    render() {
        if(this.state.confirm != true){
            return( 
            <div>
                <button onClick={() => {this.setState({confirmed: true})}}>
                    {this.props.btnText}
                </button>
            </div>
            );
        }
        return(
        <div>
            <p>{this.props.question}</p>
            <button onClick={(e) => { this.props.onClick(e), this.setState({confirmed:false})}}>
                Yes
            </button>
            <button onClick={() => {this.setState({confirmed:false})}}>
                No
            </button>
        </div>
        );
    }
}