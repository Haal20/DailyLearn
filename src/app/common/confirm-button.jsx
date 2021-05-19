import React from 'react';

export class ConfirmButton extends React.Component {
    constructor(p){
        super(p);
        this.state = {
            confirmed: false,
        }
    }

    handleClick(){
        this.props.onClick();
        this.setState({confirmed:false});
    }

    render() {
         if(this.state.confirm != true){ 
            return( 
            <div>
                <button onClick={() => {this.setState({confirmed:true})}}>
                    {this.props.btnText}
                </button>
            </div>
            );
         } 
         return(
        <div>
            <p>{this.props.question}</p>
            <button onClick={() => this.handleClick.bind(this)}>
                Yes
            </button>
            <button onClick={() => {this.setState({confirmed:false})}}>
                No
            </button>
        </div>
        ); 
    }
}