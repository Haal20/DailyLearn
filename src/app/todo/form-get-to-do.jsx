import React from 'react';
import { GETtodo } from '../logic/todos.js'
import { ToDoObject } from './to-do-object.jsx'

export class FormGetToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    /* this.handleGetChange = this.handleGetChange.bind(this); */
  }

  /* handleGetChange(e) {
    this.props.onChange(e.target.value);
  } */

    render() {
      const todo = this.props.todo;
      return (
        <div>
          Hämta att-göra med id (nummer mellan 1-25):
          <form onSubmit={this.props.handleFormSubmit}>
            <label>
              <input placeholder="Skriv id..." value={todo} onChange={this.prop.handleGetChange} />
            </label>
            <button type="submit">Hämta att-göra</button>
          </form>
          Att-göra du hämtade: 
        <br/>
        <ul>
          <ToDoObject todo={this.state.todo}/>
        </ul>
        <br/>
        </div>
      );
    }
  }