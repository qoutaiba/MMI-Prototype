import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DisplayPage.css';

const DisplayPage = () => {
    const [statuses, setStatuses] = useState([]);
    const [borderColor, setBorderColor] = useState('#00ff00');
    const [musicMode, setMusicMode] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);

    useEffect(() => {
        axios.get('/api/color')
            .then((response) => {
                console.log('Fetched color: ', response.data.color);
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

        axios.get('/api/musicMode')
            .then((response) => {
                setMusicMode(response.data.selectedOption);
            })
            .catch((error) => {
                console.error(error);
            });

        axios.get('/api/currentPage')
            .then((response) => {
                setCurrentPage(response.data.page);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <div style={{ border: '10px solid', borderRadius: '50%', padding: '20px', width: '200px', height: '200px', borderColor: borderColor }}>
                {currentPage === 'State' && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1em' }}>
                        {statuses.map((status, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h2>{status.emoji}</h2>
                                <p>{status.status}</p>
                            </div>
                        ))}
                    </div>
                )}
                {currentPage === 'Music' && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1em', flexDirection: 'column' }}>
                        {musicMode && (
                            Array.isArray(musicMode) ? musicMode.map((item, i) => <p key={i}>{item}</p>) : <p>{musicMode}</p>
                        )}
                    </div>
                )}
                {/* similar blocks for the other pages */}
            </div>
        </div>
    );

}
export default DisplayPage;
