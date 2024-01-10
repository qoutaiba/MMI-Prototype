import React, { useState } from 'react';

const OnOffButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleButtonClick = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <p>The button is {isOn ? 'ON' : 'OFF'}</p>
            <p> This button turns the screen on and off  </p>
            <button onClick={handleButtonClick}>
                {isOn ? 'Turn off the screen' : 'Turn on the screen'}
            </button>
        </div>
    );
};

export default OnOffButton;
