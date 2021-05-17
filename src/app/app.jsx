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
import { AppContext } from './logic/create-context.js';
import { ChangeThemeButton } from './components/change-theme-button.jsx';

export class App extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      todos: [],
      todo:{},
      nightMode: false,
    };
  }

  //testa Context-API:et
  handleChangeNightMode() {
    this.setState({
      nightMode: !this.state.nightMode,
    });
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
        <AppContext.Provider value={{
          nightMode: this.state.nightMode, 
          changeNightMode: this.handleChangeNightMode.bind(this),
          onGetSubmit: this.handleFormGetSubmit.bind(this),
          todo: this.state.todo,
          todos: this.state.todos,
          onPostSubmit: this.handleFormPostSubmit.bind(this)
        }}>
          <div className={this.state.nightMode ? 'night' : ''}>
            <ErrorBoundary>
            {/* testa Context-API:et */}
              <ChangeThemeButton />
            <BurgerNav />
            <FooterNav >
              <Route exact path='/'>
                <ToDoView>
                  <FormGetToDo />
                  <ListAllToDo />
                </ToDoView>
              </Route>
              <Route path='/gameMap'>
                <GameMapView/>
              </Route>
              <Route path='/studyTips'>
                <StudyTipsView>
                <FormCreateToDo />
                </ StudyTipsView>
              </Route>
            </ FooterNav>
            </ErrorBoundary>
          </div>
        </AppContext.Provider>
        );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))