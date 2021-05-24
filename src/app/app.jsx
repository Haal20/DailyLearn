import React , { createContext } from 'react';
import  ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// Logic Error && Handling
import { ErrorBoundary } from './common/error-boundary.jsx';
import { GETtodos, GETtodo, POSTtodo, DELETEtodo } from './logic/todos.js';
// Component rendering
import { FooterNav } from './components/footer-nav.jsx';
import { BurgerNav } from './components/burger-nav.jsx';
import { FormGetToDo } from './components/form-get-to-do';
import { FormCreateToDo } from './components/form-create-to-do';
import { ToDoView } from './components/to-do-view.jsx';
import { GameMapView } from './components/game-map-view.jsx';
import { StudyTipsView } from './components/study-tips-view.jsx';
import { ListAllToDo } from './components/list-all-to-do.jsx';
import { ToDoObjectExtended } from './components/to-do-object-extended.jsx';
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

  handleChangeNightMode() {
    this.setState({
      nightMode: !this.state.nightMode,
    });
  }

  async handleFormGetSubmit( todoId ) {
    // Gets a singel todo Object
    const todoObj = await GETtodo(todoId);
      if(todoObj == undefined){
        // errorObject
        errorObj = {
          assignmentName: 'Hittade inget...',
          assignmentType: 'Hittade inget...',
          StudyTime: 'Oidentifierad...',
        }
        this.setState({todo: errorObj});
      }else{
      this.setState({todo: todoObj});
    }

  }

  async handleFormPostSubmit(type, name, time) {
    //PostOne
    await POSTtodo(type, name, time);
    this.updateTodos();
    window.location = '/app.html?#';
  }

  async handleFormDeleteSubmit(Id) {
    //DeleteOne
    await DELETEtodo(Id);
    this.updateTodos();
    window.location = '/app.html?#';
  }

  async updateTodos(){
    const todos = await GETtodos();
    this.setState({todos});
  }

  async componentDidMount(){
    this.updateTodos();
  }

  render() {
      return ( 
        <AppContext.Provider value={{
          nightMode: this.state.nightMode, 
          changeNightMode: this.handleChangeNightMode.bind(this),
          onGetSubmit: this.handleFormGetSubmit.bind(this),
          todo: this.state.todo,
          todos: this.state.todos,
          onPostSubmit: this.handleFormPostSubmit.bind(this),
          onDeleteSubmit: this.handleFormDeleteSubmit.bind(this),
          updateTodos: this.updateTodos.bind(this),
        }}>
          <ErrorBoundary>
          <div className={this.state.nightMode ? 'night' : ''}>
              <BurgerNav>
                {/* <ChangeThemeButton /> */}
                <h1 className='dayOfWeek'>MÅNDAG</h1>
              </ BurgerNav>
              <Route exact path='/'>
                <ToDoView>
                  <FormGetToDo />
                  <ErrorBoundary>
                    <ListAllToDo />
                  </ErrorBoundary>
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
              <Route path='/todo/:id' 
                component={ToDoObjectExtended} />
              <FooterNav />
          </div>
          </ErrorBoundary>
        </AppContext.Provider>
        );
      }
}

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))