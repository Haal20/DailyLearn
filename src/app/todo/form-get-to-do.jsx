import React from 'react';
import { ToDoObject } from './to-do-object.jsx'

export class FormGetToDo extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      const todo = this.props.todo;
      const todoInput = this.props.todoInput;
      return (
        <div>
          Hämta att-göra med id (nummer mellan 1-25):
          <form onSubmit={this.props.onSubmit}>
            <label>
              <input placeholder="Skriv id..." value={todoInput} onChange={this.props.onChange} />
            </label>
            <button type="submit">Hämta att-göra</button>
          </form>
          Att-göra du hämtade: 
        <br/>
        <ul>
          <ToDoObject todo={todo}/>
        </ul>
        <br/>
        </div>
      );
    }
  }