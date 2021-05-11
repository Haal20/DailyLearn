import React from 'react';
import { ToDoObject } from './to-do-object.jsx'

export class FormCreateToDo extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
        const todos = this.props.todos;
        const todoInput = this.props.todoInput;
      return (
        <div>
          Skapa ny att-göra (skriv vad som behövs göras)
          <form onSubmit={this.props.onPostSubmit}>
            <label>
                <input placeholder="Skriv att-göra..." value={todoInput} onChange={this.props.onChange} />
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