import React from 'react';
import {ToDoObject} from './to-do-object.jsx';
import { AppContext } from "../logic/create-context.js";

export class ListAllToDo extends React.Component {
  constructor(p){
      super(p);
  }
  render() {
    return (
      <div>
          <ul>
              {this.context.todos.map(todo => (
              <div key={todo.id}>
                  <ToDoObject todo={todo}/>
              </div>
              ))}
          </ul>
          <br/>
          <br/>
      </div>
    );
  }
}

ListAllToDo.contextType = AppContext;