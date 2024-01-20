import React, {useState} from 'react';

import './StyleMode.css'; 

const StyleMode = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const options = ["Sound Waves", "Option to be dev.", "In Dev..."]

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleVisualClick = () => {
        const currentIndex = options.indexOf(selectedOption);
        const nextIndex = (currentIndex + 1) % options.length;
        setSelectedOption(options[nextIndex]);
    }

    return (
        <div className="style-container">
            <div className="style-page">

                <label id="choose-visual">Choose your visual:</label>
                <select id="select-visual" value={selectedOption} onChange={handleSelectChange}>
                    <option value="-">-</option>
                    
                    {
                        options.map((option) => (
                            <option value={option}>{option}</option>
                        ))
                    }
                </select>
            
                {
                    selectedOption === "Sound Waves" ? (
                    <div className="gif-container" onClick={() => handleVisualClick()}>
                        <img src="sound_visual.webp" className="style-gif">

                        </img>
                    </div>
                    ) : (
                        <div className="gif-container" onClick={() => handleVisualClick()}>
                            <img src="sound_visual.webp" className="style-gif hidden">

                            </img>
                        </div>
                    )
                }
            </div>
         
        </div>
    );
};

export default StyleMode;
