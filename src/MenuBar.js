import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMusic, faQuestion, faComment, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import './App.css'; // Import your CSS file

import { Link, useLocation } from "react-router-dom"


const App = () => {
    

    let currentPath = useLocation().pathname;
    

    return (
        
        <>
        
            <nav className="navbar">
                <ul>
                    <li className={currentPath === '/Music' ? 'selected' : ''}>
                        <Link to="/Music">
                            <div className="nav-item">
                                <FontAwesomeIcon icon={faMusic} size="2x" /> 
                            </div>
                            <span>Music</span>
                        </Link>
                    </li>

                    <li className={currentPath === '/State' ? 'selected' : ''}>
                        <Link to="/State">
                            <div className="nav-item">
                                <FontAwesomeIcon icon={faComment} size="2x" />
                            </div>
                            <span>State</span>
                        </Link>
                    </li>
                    <li className={currentPath === '/Style' ? 'selected' : ''}>
                        <Link to="/Style">
                            <div className="nav-item">
                                <FontAwesomeIcon icon={faPalette} size="2x" />
                            </div>
                            <span>Style</span>
                        </Link>
                    </li>

                    <li className={currentPath === '/Mystery' ? 'selected' : ''}>
                        <Link to="/Mystery">
                            <div className="nav-item">
                                <div className="icon-container">
                                    <FontAwesomeIcon icon={faMusic} size="2x" />

                                    <FontAwesomeIcon className="question-mark" icon={faQuestion} size="2x"/>
                                </div>
                            </div>
                            <span>Mystery</span>
                        </Link>
                    </li>
                    <li className={currentPath === '/Privacy' ? 'selected' : ''}>
                        <Link to="/Privacy">
                            <div className="nav-item">
                                {<FontAwesomeIcon icon={faMinusCircle} color="white" size="2x" />}
                            </div>
                            <span>DND</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default App;

