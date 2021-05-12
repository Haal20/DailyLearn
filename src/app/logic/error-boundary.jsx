import React from 'react'

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
          return <h1>Någonting gick fel... {this.state.error}</h1>;
        }
    
        return this.props.children; 
    }
}