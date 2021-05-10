import React from 'react'
import { FormGetToDo } from './form-get-to-do.jsx'
import { FormCreateToDo } from './form-create-to-do.jsx'

export class ToDoView extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      const todos = this.props.todos;
      return (
        <div>
          <FormGetToDo 
          onChange={()=> this.props.handleGetChange()}
          onSubmit={() => this.handleFormSubmit}
          todo = {this.props.todo} />
          <FormCreateToDo todos={todos} />
        </div>
      );
    }
}