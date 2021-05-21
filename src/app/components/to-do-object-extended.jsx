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
                
                {/** Återanvändningsbar komponent. 
                 * En knapp som tar två strängar, en handleClick och en boolean som props. */}
                <ConfirmButton 
                btnText="Radera" 
                question="Är du säker?"  
                handleClick={(val) => {
                    /* if/elsen bestämmer vad confirmed ska vara tilldelat med. Beroende på vad användaren trycker på för knapp */
                    if(val === 'Ja'){
                        /* Om man tryckt radera och tryck på Ja så körs onDeleteSubmit */
                    this.context.onDeleteSubmit(this.props.match.params.id)
                }else if(val === 'confirmed'){
                    /* Om man tryckt på radera så blir confirmed = true och knapparna Ja/Nej renderas ut */
                    this.setState({confirmed: true});
                }else{
                    /* Annars så renderas endast raderar knappen ut*/
                    this.setState({confirmed: false});
                }}}
                /* Här skickas confirmed med in i ConfirmButton */
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