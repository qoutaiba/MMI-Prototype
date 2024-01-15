import MenuBar from "./MenuBar";
import MusicMode from "./MusikMode";
import StyleMode from "./StyleMode";
import PrivateMode from "./PrivateMode";
import React, { useRef, useState } from "react";
import StateMode from "./StateMode";
import MysteryMode from './MysteryMode';
import sound from "./Musik/land.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import DisplayPage from './DisplayPage';
import axios from 'axios';

function App() {
    const [privateMode, setPrivateMode] = useState(false);
    const [color, setColor] = useState('transparent'); // Default color: transparent
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };
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
            destination = <MysteryMode />;
            break;
        case '/Display':
            destination = <DisplayPage />;
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
        axios.post('http://localhost:5000/api/color', { color: newColor }) // saves the current choosen ring color to the DB
            .catch((error) => {
                console.error(error);
            });
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
            <audio ref={audioRef} src={sound} />
            <button onClick={playAudio}>Click me </button>
            {destination}
        </div>
    );
}

export default App;
