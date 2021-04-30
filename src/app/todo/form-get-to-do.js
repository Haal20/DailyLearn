import React from 'react';
import { GETtodo } from '../logic/todos.js'
import { ToDoObject } from './to-do-object.js'

export class FormGetToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toDoInput: '',
      todo: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const input = e.target.value;
    this.setState({toDoInput: input});
  }

  async handleFormSubmit() {
    // Gets a singel todo Object
    const todoObj = await GETtodo(this.state.toDoInput);
    this.setState({todo: todoObj});
    //Clears Placeholder in input
    this.setState({toDoInput: ''});
  }

    render() {
      return (
        <div>
          Hämta att-göra med id (nummer mellan 1-25):
          <form onSubmit={this.handleFormSubmit}>
            <label>
              <input placeholder="Skriv id..." value={this.state.toDoInput} onChange={this.handleChange} />
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