import React from 'react';
import PropTypes from 'prop-types';
import {ToDoObject} from './to-do-object.jsx';
import { AppContext } from "../logic/create-context.js";

export class ListAllToDo extends React.Component {
  constructor(p){
      super(p);
  }
  render() {
      const todos = this.context.todos;
    return (
      <div>
          <ul>
              {todos.map(todo => 
                  <ToDoObject key={todo.id} todo={todo}/>
              )}
          </ul>
          <br/>
          <br/>
      </div>
    );
  }
}

ListAllToDo.contextType = AppContext;

ListAllToDo.propTypes = {
  todos: PropTypes.array
};