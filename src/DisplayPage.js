import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayPage.css';

const DisplayPage = () => {
 const [statuses, setStatuses] = useState([]);
 const [borderColor, setBorderColor] = useState('#00ff00');

 useEffect(() => {

    axios.get('/api/color')
        .then((response) => {
            console.log('Fetched color: ', response.data.color); // Log the fetched color
            setBorderColor(response.data.color);
        })
        .catch((error) => {
            console.error(error);
        });

    axios.get('/api/state')
        .then((response) => {
            setStatuses(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
 }, []);

 return (
    <div>
        <div style={{ border: '10px solid', borderRadius: '50%', padding: '20px', width: '200px', height: '200px', borderColor: borderColor }}>
            {statuses.map((status, index) => (
               <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <h2>{status.emoji}</h2>
                  <p>{status.status}</p>
               </div>
            ))}
        </div>
    </div>
 );
};

export default DisplayPage;
