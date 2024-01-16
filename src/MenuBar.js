import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMusic, faQuestion, faComment, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import './App.css'; // Import your CSS file

const App = () => {
    const handleNavigation = (route) => {
        window.location.href = route;
    };

    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => handleNavigation('/Music')}>
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faMusic} size="2x" />
                    </div>
                    <span>Music</span>
                </li>
                <li onClick={() => handleNavigation('/State')}>
                    <div className="nav-item">
                        <div className="icon-container">
                            {/*<FontAwesomeIcon icon={faSmile} size="2x" style={{ marginRight: '8px' }} />*/}
                            <FontAwesomeIcon icon={faComment} size="2x" />
                        </div>
                    </div>
                    <span>Status</span>
                </li>
                <li onClick={() => handleNavigation('/Style')}>
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faPalette} size="2x" />
                    </div>
                    <span>Style </span>
                </li>
                <li onClick={() => handleNavigation('/Mystery')}>
                    <div className="nav-item">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faMusic} size="2x" />
                            <FontAwesomeIcon icon={faQuestion} size="2x" className="question-mark" />
                        </div>
                    </div>
                    <span>Mystery </span>
                </li>
                <li /*onClick={() => handleNavigation('/Privacy')}*/>
                    <div className="nav-item">
                        {<FontAwesomeIcon icon={faMinusCircle} color="white" size="2x" />}
                    </div>
                    <span>DND</span>
                </li>
            </ul>
        </nav>

    );
};

export default App;

