import React, { useState } from 'react';
import './MusikMode.css';
import axios from 'axios';

const DropdownMenu = () => {
   const options = [
       { value: '', label: 'Mode', content: '' },
       { value: 'Show Artist and Song', label: 'Show Song and Artist', content: ['Retro Music', 'Various Artists'] },
       { value: 'Show music genres', label: 'Show music genres', content: ['8-Bit', 'Retro', 'Video Game'] },
       { value: 'Show lyrics', label: 'Show lyrics', content: 'Lyrics...' },
   ];

   const [selectedOption, setSelectedOption] = useState('');

   const handleOptionChange = (event) => {
       const selectedOptionValue = event.target.value;
       const selectedOptionInfo = options.find((option) => option.value === selectedOptionValue);
       setSelectedOption(selectedOptionInfo);
       axios.post('/api/musicMode', { selectedOption: selectedOptionInfo.content })
           .then(response => console.log(response))
           .catch(error => console.error(error));
   };

   const selectedOptionInfo = options.find((option) => option.value === selectedOption.value);

   return (
       <div className="center-container">
           <label htmlFor="dropdown">Select what to display!:</label>
           <select id="dropdown" value={selectedOption.value} onChange={handleOptionChange}>
               {options.map((option) => (
                  <option key={option.value} value={option.value}>
                      {option.label}
                  </option>
               ))}
           </select>

           {selectedOptionInfo && (
               <div className="container-with-circle">
                  <div className="circle-around-boxes"></div>
                  {typeof selectedOptionInfo.content === 'string' ? (
                      <div>
                          <p className="song-name">{selectedOptionInfo.content}</p>
                      </div>
                  ) : (
                      <div>
                          {selectedOptionInfo.content.map((text, index) => (
                              <div key={index} className="non-clickable-box">
                                 <span className={index === 0 ? 'larger-text' : 'normal-text'}>{text}</span>
                              </div>
                          ))}
                      </div>
                  )}
               </div>
           )}
       </div>
   );
};

export default DropdownMenu;
