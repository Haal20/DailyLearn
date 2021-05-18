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
                <br />
                <br />
                <br />
                <br />
                <p>ytterliggare information om todo objekt {this.props.match.params.id} </p>
                <button onClick={() => this.context.onDeleteSubmit(this.props.match.params.id)}>Radera</button>
            </div>
        );
    }
}

ToDoObjectExtended.contextType = AppContext;

ToDoObjectExtended.propTypes = {
    todo: PropTypes.object
};