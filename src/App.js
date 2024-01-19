import MenuBar from "./MenuBar";
import MusicMode from "./MusikMode";
import StyleMode from "./StyleMode";
import PrivateMode from "./PrivateMode";
import React, { useRef, useState } from "react";
import StateMode from "./StateMode";
import MysteryMode from './MysteryMode';
import sound from "./Musik/land.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faHeadphones} from "@fortawesome/free-solid-svg-icons";
import DisplayPage from './DisplayPage';
import axios from 'axios';
import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./central_styles.css";

function App() {
    const [privateMode, setPrivateMode] = useState(false);
    const [color, setColor] = useState('transparent'); // Default color: transparent
    const audioRef = useRef(null);

    useEffect(() => {
        const page = window.location.pathname.slice(1); // remove leading slash
        if (page !== 'Display') {
            axios.post('/api/currentPage', { page: page })
                .catch((error) => {
                    console.error(error);
                });
        }
      }, [window.location.pathname]);
     

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
        axios.post('/api/color', { color: newColor }) // saves the current choosen ring color to the DB
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Router>

        <div className="App">
            <button className="headphone-button">
                <FontAwesomeIcon icon={faHeadphones} />
            </button>
            <MenuBar />
            <div className="flip-switch">
                <span className="icon">
                    <FontAwesomeIcon icon={privateMode ? faEyeSlash : faEye} />
                </span>
                <div className={`switch ${privateMode ? 'active' : ''}`} onClick={togglePrivateMode}>
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
            <button onClick={playAudio}>Click me </button>
                <Routes>
                    <Route path="/" element={<MysteryMode/>}></Route>
                    <Route path="/Music" element={<MusicMode/>}></Route>
                    <Route path="/State" element={<StateMode/>}></Route>
                    <Route path="/Style" element={<StyleMode/>}></Route>
                    <Route path="/Mystery" element={<MysteryMode/>}></Route>
                    <Route path="/Privacy" element={<PrivateMode/>}></Route>
                    <Route path="/Display" element={<DisplayPage/>}></Route>
                </Routes>

        </div>
        </Router>

    );
}

export default App;
