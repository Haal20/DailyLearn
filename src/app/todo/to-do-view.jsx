import React from 'react'
import { FormGetToDo } from './form-get-to-do.jsx'
import { FormCreateToDo } from './form-create-to-do.jsx'

export class ToDoView extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      const todos = this.props.todos;
      const todo = this.props.todo;
      return (
        <div>
          <FormGetToDo 
          onGetChange={(e)=> this.props.handleGetChange(e)}
          todo = {todo} />
          <FormCreateToDo todos={todos} />
        </div>
      );
    }
}