import React from 'react'
import {POSTtodo, GETtodo} from '../logic/todos'
import ToDoObject from './to-do-object';

class ToDoView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toDoInput: '',
      todo: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({toDoInput: input});
  }

  //Async?Await?
  handleFormSubmit() {
    //PostOne
    POSTtodo(this.state.toDoInput);

    // TODO: Move fetch to logic/todos.js
    fetch(`https://retoolapi.dev/T5kUZD/todos/${this.state.toDoInput}`)
    .then(response => response.json())
    .then(data => {
        this.setState({todo: data});
    })
    // TODO: If not '' do Get
    GETtodo(this.state.toDoInput); 

    //Clears Placeholder in input
    this.setState({toDoInput: ''});
  }

  componentDidMount(){
  }

    render() {
      const todos = this.props.todos;
      return (
        <div>
          Hämta att-göra med id (nummer mellan 1-25):
        <form onSubmit={this.handleFormSubmit}>
          <label>
           <input placeholder="Skriv att-göra..." value={this.state.toDoInput} onChange={this.handleChange} />
          </label>
          <button type="submit">Skapa att-göra</button>
        </form>
        Att-göra du hämtade: 
        <br/>
        <ul>
          <ToDoObject todo={this.state.todo}/>
        </ul>
        <br/>
        <br/>
        <div>
        <ul>
            {todos.map(todo => 
                <ToDoObject todo={todo}/>
            )}
        </ul>
    </div>
        </div>
      );
    }
  }
   
  export default ToDoView