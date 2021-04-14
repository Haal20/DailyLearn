import React from 'react'

class StudyTips extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }


    

    render() {

        return (
            <button onClick={this.props.onClick}>
                fördjupning
            </button>
        );
    }
}

export default StudyTips