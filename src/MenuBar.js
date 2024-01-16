import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMusic, faUserSecret, faChartBar, faQuestion } from '@fortawesome/free-solid-svg-icons';

import './App.css'; // Import your CSS file

const App = () => {
    const currentPath = window.location.pathname;
    const handleNavigation = (route) => {
        window.location.href = route;
    };

    return (
        <nav className="navbar">
            <ul>
                <li className={currentPath === '/Music' ? 'selected' : ''} onClick={() => handleNavigation('/Music')}>
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faMusic} size="2x" />
                    </div>
                    <span>Music</span>
                </li>
                <li className={currentPath === '/State' ? 'selected' : ''} onClick={() => handleNavigation('/State')}>
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faChartBar} size="2x" />
                    </div>
                    <span>Status</span>
                </li>
                <li className={currentPath === '/Style' ? 'selected' : ''} onClick={() => handleNavigation('/Style')}>
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faPalette} size="2x" />
                    </div>
                    <span>Style</span>
                </li>
                <li className={currentPath === '/Mystery' ? 'selected' : ''} onClick={() => handleNavigation('/Mystery')}>
                    <div className="nav-item">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faMusic} size="2x" />
                            <FontAwesomeIcon icon={faQuestion} size="2x" className="question-mark" />
                        </div>
                    </div>
                    <span>MystShare</span>
                </li>
                <li className={currentPath === '/Privacy' ? 'selected' : ''} onClick={() => handleNavigation('/Privacy')}>
                    <div className="nav-item">
                        <FontAwesomeIcon icon={faUserSecret} size="2x" />
                    </div>
                    <span>DND</span>
                </li>
            </ul>
        </nav>

    );
};

export default App;

