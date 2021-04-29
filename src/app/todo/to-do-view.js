import React from 'react'
import {POSTtodo, GETtodo} from '../logic/todos'
import ToDoObject from './to-do-object';

class ToDoView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toDoInput: '',
      postToDoInput: '',
      todo: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.POSTFormSubmit = this.POSTFormSubmit.bind(this);
    this.handlePOSTChange = this.handlePOSTChange.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({toDoInput: input});
  }

  async handleFormSubmit() {
    // Gets a singel todo Object
    const todoObj = await GETtodo(this.state.toDoInput);
    this.setState({todo: todoObj});
    //Clears Placeholder in input
    this.setState({toDoInput: ''});
  }


  handlePOSTChange(e) {
    const input = e.target.value;
    this.setState({postToDoInput: input});
  }

  async POSTFormSubmit() {
    //PostOne
    await POSTtodo(this.state.postToDoInput)
    //Clears Placeholder in input
    this.setState({postToDoInput: ''});
  }

    render() {
      const todos = this.props.todos;
      return (
        <div>
          Hämta att-göra med id (nummer mellan 1-25):
        <form onSubmit={this.handleFormSubmit}>
          <label>
           <input placeholder="Skriv id..." value={this.state.toDoInput} onChange={this.handleChange} />
          </label>
          <button type="submit">Hämta att-göra</button>
        </form>
        Att-göra du hämtade: 
        <br/>
        <ul>
          <ToDoObject todo={this.state.todo}/>
        </ul>
        <br/>

        Skapa ny att-göra (skriv vad som behövs göras)
        <form onSubmit={this.POSTFormSubmit}>
          <label>
           <input placeholder="Skriv att-göra..." value={this.state.postToDoInput} onChange={this.handlePOSTChange} />
          </label>
          <button type="submit">Skapa att-göra</button>
        </form>

        <br/>
        <div>
        <ul>
            {todos.map(todo => 
                <ToDoObject key={todo.id} todo={todo}/>
            )}
        </ul>
    </div>
        </div>
      );
    }
  }
   
  export default ToDoView