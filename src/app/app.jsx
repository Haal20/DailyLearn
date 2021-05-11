import React from 'react'
import  ReactDOM from 'react-dom'
import { FooterNav } from './footer-nav.jsx'
import { BurgerNav } from './burger-nav.jsx';
import { GETtodos, GETtodo, POSTtodo } from './logic/todos.js'
import { HashRouter } from "react-router-dom"
import { FormGetToDo } from './todo/form-get-to-do'
import { FormCreateToDo } from './todo/form-create-to-do'
import { ToDoView } from './todo/to-do-view.jsx'

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

  async handleFormGetSubmit(todoId) {
    // Gets a singel todo Object
    const todoObj = await GETtodo(todoId);
    this.setState({todo: todoObj});
    //Clears Placeholder in input
    this.setState({todoInput: ''}); // todoId
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
      return ( 
          <div>
            <BurgerNav />
            <FooterNav >
              <ToDoView>
                <FormGetToDo 
                  onGetSubmit = {this.handleFormGetSubmit}
                  todo = {this.state.todo} />
                <FormCreateToDo 
                  todos={this.state.todos}
                  todoInput = {this.state.todoInput}
                  onChange={this.handleChange}
                  onPostSubmit = {this.handleFormPostSubmit} />
              </ToDoView>
            </ FooterNav>
          </div>
          );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))