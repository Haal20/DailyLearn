import React from 'react'
import  ReactDOM from 'react-dom'
import { FooterNav } from './components/footer-nav.jsx'
import { BurgerNav } from './components/burger-nav.jsx';
import { GETtodos, GETtodo, POSTtodo } from './logic/todos.js'
import { HashRouter } from "react-router-dom"
import { FormGetToDo } from './components/form-get-to-do'
import { FormCreateToDo } from './components/form-create-to-do'
import { ToDoView } from './components/to-do-view.jsx'
import { GameMapView } from './components/game-map-view.jsx'
import { StudyTipsView } from './components/study-tips-view.jsx'
import { Route } from "react-router-dom"
import { ListAllToDo } from './components/list-all-to-do.jsx';
import { ErrorBoundary } from './logic/error-boundary.jsx';

export class App extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      todos: [],
      todo:[]
    };
    this.handleFormGetSubmit = this.handleFormGetSubmit.bind(this);
    this.handleFormPostSubmit = this.handleFormPostSubmit.bind(this);
  }

  async handleFormGetSubmit(todoId) {
    // Gets a singel todo Object
    const todoObj = await GETtodo(todoId);
    this.setState({todo: todoObj});
    // TODO: Clears Placeholder in input
  }

  async handleFormPostSubmit(todoInput) {
    //PostOne
    await POSTtodo(todoInput)
    // TODO: Clears Placeholder in input
  }

  async componentDidMount(){
    const todos = await GETtodos();
    this.setState({todos});
  }

  render() {
      return ( 
          <div>
            <BurgerNav />
            <ErrorBoundary>
            <FooterNav >
              <Route exact path='/'>
                <ToDoView>
                  <FormGetToDo 
                    onGetSubmit = {this.handleFormGetSubmit}
                    todo = {this.state.todo} />
                  <ListAllToDo todos={this.state.todos} />
                </ToDoView>
              </Route>
              <Route path='/gameMap'>
                <GameMapView/>
              </Route>
              <Route path='/studyTips'>
                <StudyTipsView>
                <FormCreateToDo 
                    todos={this.state.todos}
                    onPostSubmit = {this.handleFormPostSubmit} />
                </ StudyTipsView>
              </Route>
            </ FooterNav>
            </ErrorBoundary>
          </div>
          );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))