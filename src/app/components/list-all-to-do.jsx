import React from 'react';
import PropTypes from 'prop-types';
import {ToDoObject} from './to-do-object.jsx';

export class ListAllToDo extends React.Component {
  constructor(p){
      super(p);
  }
  render() {
      const todos = this.props.todos;
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

ListAllToDo.propTypes = {
  todos: PropTypes.array
};