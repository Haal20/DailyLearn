import React from 'react'
import  ReactDOM from 'react-dom'
import { FooterNav } from './footer-nav.jsx'
import { BurgerNav } from './burger-nav.jsx';
import { GETtodos, GETtodo, POSTtodo } from './logic/todos.js'
import { HashRouter } from "react-router-dom"

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todoInput: '',
      todo:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormGetSubmit = this.handleFormGetSubmit.bind(this);
    this.handleFormPostSubmit = this.handleFormPostSubmit.bind(this);
  }

  handleChange(e) {
    const input = e.target.value;
    this.setState({todoInput: input})
  }

  async handleFormGetSubmit() {
    // Gets a singel todo Object
    const todoObj = await GETtodo(this.state.todoInput);
    this.setState({todo: todoObj});
    //Clears Placeholder in input
    this.setState({todoInput: ''});
  }

  async handleFormPostSubmit() {
    //PostOne
    await POSTtodo(this.state.todoInput)
    //Clears Placeholder in input
    this.setState({todoInput: ''});
  }

  async componentDidMount(){
    const todos = await GETtodos();
    this.setState({todos});
  }

  render() {
    const todo = this.state.todo;
    const todoInput = this.state.todoInput;
      return ( 
          <div>
        
            <BurgerNav />
            <FooterNav 
              todos = {this.state.todos}
              todo = {todo}
              todoInput = {todoInput}
              onChange = {this.handleChange}
              onGetSubmit = {this.handleFormGetSubmit}
              onPostSubmit = {this.handleFormPostSubmit}
            />
          </div>
          );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))