import React from 'react'

class StudyTips extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <button className="button" onClick={this.props.onClick}>
                <span className="icon">
                <i className="fas fa-home">Mer</i>
                </span>
            </button>
        );
    }
}

export default StudyTips