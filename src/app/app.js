import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

export class App extends React.Component {
  render() {
      return ( 
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
          );
      }
}

ReactDOM.render(<App />, document.getElementById('root'))