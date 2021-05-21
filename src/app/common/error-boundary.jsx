import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

export class ErrorBoundary extends React.Component {
    constructor(p){
        super(p);
        this.state = { 
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
          return (
          <div className='error'>
              <div>
                  <h1>
                    <FontAwesomeIcon icon={faBug} />
                  </h1>
              </div>
              <h2> Kunde inte ladda sidans innehåll, vi är ledsna för besväret... </h2>
              <br />
              <button onClick={() => { window.location.reload(false) }}>Ladda om sidan</button>
          </div>
          );
        }
    
        return this.props.children; 
    }
}