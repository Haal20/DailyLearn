import React from 'react'

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        };
        this.toDoList = this.toDoList.bind(this);
    }

    toDoList(){
        console.log('Clicked Hem');
    }


    render() {
        return (
            <button onClick={this.props.onClick}>
                hem
            </button>
        );
    }
}

export default ToDoList