import React, {useState} from 'react';

const StyleMode = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div>
            <label>Select an option for the visuals:</label>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select...</option>
                <option value="Visuals1">Variante 1</option>
                <option value="Visuals2">Variante 2</option>
                <option value="Visuals3">Variante 3</option>
            </select>
            {selectedOption && (
                <p>You selected: {selectedOption}</p>
            )}
        </div>
    );
};

export default StyleMode;
