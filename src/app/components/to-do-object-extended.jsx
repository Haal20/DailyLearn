import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from "../logic/create-context.js";
import { ConfirmButton } from '../common/confirm-button.jsx';

export class ToDoObjectExtended extends React.Component {
    constructor(p){
        super(p);
        this.state = {
            confirmed: false,
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.context.onGetSubmit(id);
    }

    render() {
        if(this.context.todo.id != this.props.match.params.id)
        {
            return null;
        }
        return (
            <div className='createForm'>
                <p>{this.context.todo.id}<br />Detta är ytterliggare information om {this.context.todo.assignmentName} ({this.context.todo.assignmentType})</p><br/>
                
                <ConfirmButton 
                btnText="Radera" 
                question="Är du säker?"  
                handleClick={(val) => {
                    if(val === 'Ja'){
                    this.context.onDeleteSubmit(this.props.match.params.id)
                }else if(val === 'confirmed'){
                    this.setState({confirmed: true});
                }else{
                    this.setState({confirmed: false});
                }}}
                confirmed = {this.state.confirmed} />

            </div>
        );
    }
}

ToDoObjectExtended.contextType = AppContext;

ToDoObjectExtended.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
};