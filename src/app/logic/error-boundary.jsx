import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

export class ErrorBoundary extends React.Component {
    constructor(p){
        super(p);
        this.state = { 
            hasError: false, 
            error:''
        };
    }

    static getDerivedStateFromError(error) {
        this.setState({error: error});
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
          return (
          <div>
              <div>
                  <FontAwesomeIcon icon={faBug} />
              </div>
              <h1> Kunde inte ladda sidans innehåll, vi är ledsna för besväret...</h1>
              <div>
                  {this.state.error}
              </div>
          </div>
          );
        }
    
        return this.props.children; 
    }
}