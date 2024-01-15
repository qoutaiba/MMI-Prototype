import React, { useState } from 'react';
import './StateMode.css'; // Import CSS file for styling
import axios from 'axios';

const StatusComponent = () => {
    const [emojis, setEmojis] = useState(['😊', '😁', '😖', '😡', '😳', '😴']); // Sample emojis
    const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
    const [status, setStatus] = useState('');
    const [showText, setShowText] = useState(false);
    
    const handleSubmit = async (emoji, status) => { // POST to api/state to send emoji and status to DB
        try {
            const response = await axios.post('http://localhost:5000/api/state', JSON.stringify({ emoji, status }), {  
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handlePrevious = () => {
        const newIndex = (currentEmojiIndex - 1 + emojis.length) % emojis.length;
        setCurrentEmojiIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (currentEmojiIndex + 1) % emojis.length;
        setCurrentEmojiIndex(newIndex);
    };

    const handleCheck = () => {
        setShowText(true);
        handleSubmit(emojis[currentEmojiIndex], status);
    };


    const handleCancel = () => {
        console.log('Cancel clicked');
    };

    return (
        <div className="status-container">
            <div className="emoji-text-container">
                <div className="emoji-window">{emojis[currentEmojiIndex]}</div>
                {showText && <p className="entered-text">{status}</p>}
            </div>
            {!showText && (
                <div className="arrow-buttons">
                    <button className="arrow-button" onClick={handlePrevious}>
                        {'<'}
                    </button>
                    <button className="arrow-button" onClick={handleNext}>
                        {'>'}
                    </button>
                </div>
            )}
            {!showText && (
                <div className="text-input">
                    <input
                        className="status-input"
                        type="text"
                        placeholder="Enter status"
                        value={status}
                        onChange={handleStatusChange}
                    />
                    <div className="action-buttons">
                        <button className="check-button" onClick={handleCheck}>
                            ✓
                        </button>
                        <button className="cancel-button" onClick={handleCancel}>
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatusComponent;