import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'
import ToDoList from './to-do-list.js'
import GameMap from './game-map.js'
import StudyTips from './study-tips.js'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'toDoView'
    };
  }


  render() {
      return ( 
          <div>
            <Header />
            <Main view = {this.state.view} />

            <Footer> 
              <ToDoList onClick={()=> this.setState({ view: 'toDoViwe' })}/>
              <GameMap  onClick={()=> this.setState({ view: 'gameMapViwe' })}/>
              <StudyTips onClick={()=> this.setState({ view: 'studyTipsViwe' })}/> 
            </Footer>
          </div>
          );
      }
}

ReactDOM.render(<App />, document.getElementById('root'))