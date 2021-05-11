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
          onChange={this.props.onChange}
          onSubmit = {this.props.onSubmit}
          todo = {todo}
          todoInput = {this.props.todoInput} />
          <FormCreateToDo todos={todos} />
        </div>
      );
    }
}