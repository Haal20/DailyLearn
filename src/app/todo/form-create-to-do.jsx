import React from 'react';
import { POSTtodo } from '../logic/todos.js'
import { ToDoObject } from './to-do-object.jsx'

export class FormCreateToDo extends React.Component {
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
    //PostOne
    await POSTtodo(this.state.toDoInput)
    //Clears Placeholder in input
    this.setState({toDoInput: ''});
  }

    render() {
        const todos = this.props.todos;
      return (
        <div>
          Skapa ny att-göra (skriv vad som behövs göras)
          <form onSubmit={this.handleFormSubmit}>
            <label>
                <input placeholder="Skriv att-göra..." value={this.state.toDoInput} onChange={this.handleChange} />
            </label>
            <button type="submit">Skapa att-göra</button>
          </form>
          <br/>
          <div>
            <ul>
              {todos.map(todo => 
                  <ToDoObject key={todo.id} todo={todo}/>
              )}
            </ul>
          </div>
        </div>
      );
    }
  }