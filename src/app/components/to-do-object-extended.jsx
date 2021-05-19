import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from "../logic/create-context.js";
import { ConfirmButton } from '../common/confirm-button.jsx';

export class ToDoObjectExtended extends React.Component {
    constructor(p){
        super(p);
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
                <button onClick={() => this.context.onDeleteSubmit(this.props.match.params.id)}>Radera</button>
                <ConfirmButton btnText="RaderaConfirmed" question="Är du säker?"  onClick={() => this.context.onDeleteSubmit(this.props.match.params.id)} />
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