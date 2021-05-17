import React , { createContext } from 'react';
import  ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// Logic Error && Handling
import { ErrorBoundary } from './logic/error-boundary.jsx';
import { GETtodos, GETtodo, POSTtodo } from './logic/todos.js';
// Component rendering
import { FooterNav } from './components/footer-nav.jsx';
import { BurgerNav } from './components/burger-nav.jsx';
import { FormGetToDo } from './components/form-get-to-do';
import { FormCreateToDo } from './components/form-create-to-do';
import { ToDoView } from './components/to-do-view.jsx';
import { GameMapView } from './components/game-map-view.jsx';
import { StudyTipsView } from './components/study-tips-view.jsx';
import { ListAllToDo } from './components/list-all-to-do.jsx';
//import context
import { NightModeContext } from './logic/create-context.js';
import { ChangeThemeButton } from './components/change-theme-button.jsx';

export class App extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      todos: [],
      todo:{},
      //testa Context-API:et
      nightMode: false,
    };
    this.handleFormGetSubmit = this.handleFormGetSubmit.bind(this);
    this.handleFormPostSubmit = this.handleFormPostSubmit.bind(this);
  }

  //testa Context-API:et
  handleChangeNightMode() {
    this.setState({nightMode: !this.state.nightMode});
  }

  async handleFormGetSubmit( todoId ) {
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
        <NightModeContext.Provider value={{nightMode: this.state.nightMode}}>
          <div className={this.state.nightMode ? 'night' : ''}>
            <ErrorBoundary>
            {/* testa Context-API:et */}
              <ChangeThemeButton handleChangeNightMode={this.handleChangeNightMode.bind(this)}/>
            <BurgerNav />
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
                    onPostSubmit = {this.handleFormPostSubmit} />
                </ StudyTipsView>
              </Route>
            </ FooterNav>
            </ErrorBoundary>
          </div>
        </NightModeContext.Provider>
        );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))