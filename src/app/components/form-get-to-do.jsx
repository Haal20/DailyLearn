import React from 'react';
import PropTypes from 'prop-types';
import { ToDoObject } from './to-do-object.jsx';

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
            <button onClick={() => this.props.onGetSubmit(this.state.todoInput)}> Hämta att-göra </button>
          </div>
          Att-göra du hämtade: 
        <br/>
        <ul>
          <ToDoObject todo={this.props.todo}/>
        </ul>
        <br/>
        </div>
      );
    }
  }

FormGetToDo.propTypes = {
  todo: PropTypes.object,
  onGetSubmit: PropTypes.func.isRequired
};