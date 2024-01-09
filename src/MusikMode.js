import React, { useState } from 'react';
import './MusikMode.css'; //

const DropdownMenu = () => {
    const options = [
        { value: '', label: '-- Select --', content: '' },
        { value: 'Show Artist and Song', label: 'Show Artist and Song', content: 'Song Name \n Artist' },
        { value: 'Show music genres', label: 'Show music genres', content: ['Power Metal', 'Metal', 'Progressive Metal'] },
        { value: 'Show lyrics', label: 'Show lyrics', content: 'Hier koennte ihr Text stehen!' },
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const selectedOptionInfo = options.find((option) => option.value === selectedOption);

    return (
        <div className="center-container"> {}
            <label htmlFor="dropdown">Select an option:</label>
            <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {selectedOptionInfo && (
                <div>
                    {typeof selectedOptionInfo.content === 'string' ? (
                        <div>
                            <p>{selectedOptionInfo.content}</p>
                        </div>
                    ) : (
                        <div>
                            {selectedOptionInfo.content.map((buttonText, index) => (
                                <button key={index} onClick={() => console.log(buttonText)}>
                                    {buttonText}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
