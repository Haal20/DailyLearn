import React from 'react';
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
          {/* Hämta att-göra med id (nummer mellan 1-25):
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
        </ul> */}
        </div>
      );
    }
  }


FormGetToDo.contextType = AppContext;