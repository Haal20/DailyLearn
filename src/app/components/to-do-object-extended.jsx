import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from "../logic/create-context.js";

export class ToDoObjectExtended extends React.Component {
    constructor(p){
        super(p);
    }
    render() {
        return (
            <div className='todoObjExtended'>
                <p>ytterliggare information om ett todo objekt</p>
                <button onClick={() => this.props.onDeleteSubmit(this.props.todo.id)}>Radera</button>
            </div>
        );
    }
}

ToDoObjectExtended.contextType = AppContext;

ToDoObjectExtended.propTypes = {
    todo: PropTypes.object
};