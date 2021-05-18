import React from 'react';
import PropTypes, { element } from 'prop-types';
import { Link } from "react-router-dom";
//Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

export class FooterNav extends React.Component{
    constructor(p){
        super(p);
    }
    render(){
        return(
        <div>
            <nav>
            <div className="footerNav">
                <Link className="footerBtn" to='/'>
                    <span className="icon">
                        <FontAwesomeIcon icon={faHome} />
                    </span>
                </Link>
                <Link className="footerBtn" to='/gameMap'>
                    <span className="icon">
                        <FontAwesomeIcon icon={faUserFriends} />
                    </span>
                </Link>
                <Link className="footerBtn" to='/studyTips'>
                    <span className="icon">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                </Link>
            </div>
            </nav>
        </div>
        );
    }
}

FooterNav.propTypes = {
    children: PropTypes.arrayOf(element)
  };