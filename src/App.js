import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import MenuBar from "./MenuBar";
import MusicMode from "./MusikMode";
import StyleMode from "./StyleMode";
import PrivateMode from "./PrivateMode";
import StateMode from "./StateMode";
import MysteryMode from './MysteryMode';
import sound from "./Musik/land.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import DisplayPage from './DisplayPage';
import "./central_styles.css";

function App() {
    const [privateMode, setPrivateMode] = useState(false);
    const [color, setColor] = useState('transparent'); // Default color: transparent
    const [menuClicked, setMenuClicked] = useState(false);
    const audioRef = useRef(null);
    const currentPage = useLocation().pathname.slice(1);

    console.log(currentPage)

    useEffect(() => {
        if (currentPage !== 'Display') {
            axios.post('/api/currentPage', { page: currentPage })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [currentPage]);

    const playAudio = () => {
        audioRef.current.play();
    };

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
        axios.post('/api/color', { color: newColor }) // saves the current chosen ring color to the DB
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="App">
            {currentPage !== 'Display' && (
                <>
                    <button className="headphone-button">
                        <FontAwesomeIcon icon={faHeadphones} />
                    </button>
                    <MenuBar setMenuClicked={setMenuClicked} currentPage={currentPage} />
                    <div className="flip-switch">
                        <span className="icon">
                            <FontAwesomeIcon icon={privateMode ? faEyeSlash : faEye} />
                        </span>
                        <div className={`switch ${privateMode ? 'passive' : 'active'}`} onClick={() => { togglePrivateMode(); playAudio(); }}>
                            <div className="track">
                                <div className="knob" />
                            </div>
                        </div>
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
                </>
            )}
            <Routes>
                <Route path="/" element={<MysteryMode />}></Route>
                <Route path="/Music" element={<MusicMode />}></Route>
                <Route path="/State" element={<StateMode />}></Route>
                <Route path="/Style" element={<StyleMode />}></Route>
                <Route path="/Mystery" element={<MysteryMode />}></Route>
                <Route path="/Privacy" element={<PrivateMode />}></Route>
                <Route path="/Display" element={<DisplayPage />}></Route>
            </Routes>
        </div>
    );
    
}

export default App;
