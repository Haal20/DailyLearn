import React from 'react';
import PropTypes from 'prop-types';
import { ToDoObject } from './to-do-object.jsx';
import { AppContext } from "../logic/create-context.js";

export class FormGetToDo extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      todoInput: '',
    };
  }
    render() {
      return (
        <div>
          Hämta att-göra med id (nummer mellan 1-25):
          <div>
            <label>
              <input placeholder="Skriv id..." value={this.state.todoInput} onChange={(e) => this.setState({todoInput: e.target.value})} />
            </label>
            <button onClick={() => this.context.onGetSubmit(this.state.todoInput)}> Hämta att-göra </button>
          </div>
          Att-göra du hämtade: 
        <br/>
        <ul>
          <ToDoObject todo={this.context.todo}/>
        </ul>
        <br/>
        </div>
      );
    }
  }


FormGetToDo.contextType = AppContext;

FormGetToDo.propTypes = {
};