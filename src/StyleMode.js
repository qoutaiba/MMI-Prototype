import React, {useState} from 'react';

import './StyleMode.css'; 

const StyleMode = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div className="style-container">
            <div className="style-page">

                <label>Select an option for the visuals:</label>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select...</option>
                    <option value="Visuals1">Variante 1</option>
                    <option value="Visuals2">Variante 2</option>
                    <option value="Visuals3">Variante 3</option>
                </select>


                {selectedOption && (
                    <div>You selected: {selectedOption}</div>
                )}
                <div className="gif-container">
                    <img src="sound_visual.webp" id="style-gif">

                    </img>
                </div>
            </div>
         
        </div>
    );
};

export default StyleMode;
