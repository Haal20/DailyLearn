import React from 'react';
import { ToDoObject } from './to-do-object.jsx'

export class FormGetToDo extends React.Component {
  constructor(props){
    super(props);
     this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(e) {
    this.props.onGetChange(e.target.value);
  } 

    render() {
      const todo = this.props.todo;
      return (
        <div>
          Hämta att-göra med id (nummer mellan 1-25):
          <form onSubmit={this.props.onFormSubmit}>
            <label>
              <input placeholder="Skriv id..." value={todo} onChange={this.handleChange} />
            </label>
            <button type="submit">Hämta att-göra</button>
          </form>
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