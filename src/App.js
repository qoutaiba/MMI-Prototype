import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import MenuBar from './MenuBar';
import MusicMode from './MusikMode';
import StyleMode from './StyleMode';
import PrivateMode from './PrivateMode';
import StateMode from './StateMode';
import MysteryMode from './MysteryMode';

import "./central_styles.css";

function App() {
    const [privateMode, setPrivateMode] = useState(false);
    const [color, setColor] = useState('transparent'); // Default color: transparent

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
        case '/Mystery':
            destination = <MysteryMode/>;
            break;

        default:
            destination = null;
            break;

    }

    const togglePrivateMode = () => {
        setPrivateMode(!privateMode);
    };

    const handleColorChange = (event) => {
        const value = event.target.value;
        let newColor;
        switch (value) {
            case '0':
                newColor = 'transparent'; // Off
                break;
            case '1':
                newColor = '#00ff00'; // Green
                break;
            case '2':
                newColor = '#0000ff'; // Blue
                break;
            case '3':
                newColor = '#ff0000'; // Red
                break;
            default:
                newColor = 'transparent'; // Off by default
                break;
        }
        setColor(newColor);
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
            <div className="color-slider">
                <div className="color-indicator" style={{ borderColor: color }}></div>
                <input
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    value={color === 'transparent' ? '0' : color === '#00ff00' ? '1' : color === '#0000ff' ? '2' : '3'}
                    onChange={handleColorChange}
                />
            </div>
            {destination}
        </div>
    );
}

export default App;
