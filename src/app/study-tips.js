import React from 'react'

class StudyTips extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.studyTips = this.studyTips.bind(this);
    }


    studyTips(){
        console.log('Clicked fördjupning');
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