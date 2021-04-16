import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

class StudyTips extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <button className="button is-large" onClick={this.props.onClick}>
                <span className="icon">
                <FontAwesomeIcon icon={faGraduationCap} />
                </span>
            </button>
        );
    }
}

export default StudyTips