import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMusic, faUserSecret, faChartBar } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you want to use

import './App.css'; // Import your CSS file

const App = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <button className="nav-btn" onClick={() => window.location.href = "/Music"}>
                        <FontAwesomeIcon icon={faMusic} size="2x" />
                        <span>Music</span>
                    </button>
                </li>
                <li>
                    <button className="nav-btn" onClick={() => window.location.href = "/State"}>
                        <FontAwesomeIcon icon={faChartBar} size="2x" />
                        <span>Status</span>
                    </button>
                </li>
                <li>
                    <button className="nav-btn" onClick={() => window.location.href = "/Style"}>
                        <FontAwesomeIcon icon={faPalette} size="2x" />
                        <span>Style</span>
                    </button>
                </li>
                <li>
                    <button className="nav-btn" onClick={() => window.location.href = "/Music"}>
                        <FontAwesomeIcon icon={faMusic} size="2x" />
                        <span>Music</span>
                    </button>
                </li>
                <li>
                    <button className="nav-btn" onClick={() => window.location.href = "/Privacy"}>
                        <FontAwesomeIcon icon={faUserSecret} size="2x" />
                        <span>DND</span>
                    </button>
                </li>

            </ul>
        </nav>
    );
};

export default App;
