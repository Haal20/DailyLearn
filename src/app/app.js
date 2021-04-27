import React from 'react'
import ReactDOM from 'react-dom'
import FooterNav from './footer-nav.js'
import BurgerNav from './burger-nav.js';

export class App extends React.Component {
  render() {
      return ( 
          <div>
            <BurgerNav />
            <FooterNav /> 
          </div>
          );
      }
}

ReactDOM.render(<App />, document.getElementById('root'))