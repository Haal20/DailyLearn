import React from 'react'
import  ReactDOM from 'react-dom'
import { FooterNav } from './footer-nav.jsx'
import { BurgerNav } from './burger-nav.jsx';
import { GETtodos } from './logic/todos.js'
import { HashRouter } from "react-router-dom"

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todoInput: '',
      todo:[]
    };
    this.handleGetChange = this.handleGetChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleGetChange(e) {
    this.setState({todoInput: e})
  }

  async handleFormSubmit() {
    // Gets a singel todo Object
    const todoObj = await GETtodo(this.props.todo);
    this.setState({todo: todoObj});
    //Clears Placeholder in input
    this.setState({todo: ''});
  }

  async componentDidMount(){
    const todos = await GETtodos();
    this.setState({todos});
  }

  render() {
    const todo = this.state.todo;
      return ( 
          <div>
        
            <BurgerNav />
            <FooterNav 
              todos = {this.state.todos}
              todo = {todo}
              onGetChange = {() => this.handleGetChange}
              onSubmit={() => this.handleFormSubmit} />
          </div>
          );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))