import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import MenuBar from './MenuBar';
import MusicMode from './MusikMode';
import StyleMode from './StyleMode';
import PrivateMode from './PrivateMode';
import StateMode from './StateMode';

function App() {
    const [privateMode, setPrivateMode] = useState(false);

    let destination;
    switch (window.location.pathname) {
        case '/Music':
            destination = <MusicMode />;
            break;
        case '/Style':
            destination = <StyleMode />;
            break;
        case '/Privacy':
            destination = <PrivateMode />;
            break;
        case '/State':
            destination = <StateMode />;
            break;
        default:
            destination = null;
            break;
    }

    const togglePrivateMode = () => {
        setPrivateMode(!privateMode);
    };

    return (
        <div className="App">
            <MenuBar />
            <div className="flip-switch">
                <div className={`switch ${privateMode ? 'active' : ''}`} onClick={togglePrivateMode}>
                    <div className="track">
                        <div className="knob" />
                    </div>
                </div>
                <span className="icon">
                    <FontAwesomeIcon icon={privateMode ? faEyeSlash : faEye} />
                </span>
            </div>
            <span className="toggle-label"></span>
            {destination}
        </div>
    );
}

export default App;
