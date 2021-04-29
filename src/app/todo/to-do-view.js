import React from 'react'
import { POSTtodo, GETtodo } from '../logic/todos'
import { ToDoObject } from './to-do-object';
import { FormGetToDo } from './form-get-to-do.js'
import { FormCreateToDo } from './form-create-to-do.js'

export class ToDoView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
    render() {
      const todos = this.props.todos;
      return (
        <div>
          <FormGetToDo />
          <FormCreateToDo todos={todos} />
        </div>
      );
    }
}