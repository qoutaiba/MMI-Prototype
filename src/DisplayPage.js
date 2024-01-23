import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './DisplayPage.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic, faQuestion} from '@fortawesome/free-solid-svg-icons';

const DisplayPage = () => {
    const [statuses, setStatuses] = useState([]);
    const [borderColor, setBorderColor] = useState('#00ff00');
    const [musicMode, setMusicMode] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [mysteryModeName, setMysteryModeName] = useState("");
    const [privateMode, setPrivateMode] = useState(null);


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
        axios.get('/api/mysteryMode')
            .then((response) => {
                setMysteryModeName(response.data.name);
            })
            .catch((error) => {
                console.error(error);
            });
        axios.get('/api/privacyMode')
            .then((response) => {
                setPrivateMode(response.data.privateMode);
            })
            .catch((error) => {
                console.error(error);
            });

        const interval = setInterval(() => {
            window.location.reload();
        }, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {!privateMode && (
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
                    {currentPage === 'Style' && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={"sound_visual.webp"} alt="Style" className='small-image' />
                        </div>
                    )}
                    {currentPage === 'Mystery' && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1em' }}>
                            <p>Join my channel: {mysteryModeName}</p>
                            <div style={{ display: 'flex', gap: '1em' }}>
                                <FontAwesomeIcon icon={faMusic} size="2x" />
                                <FontAwesomeIcon icon={faQuestion} size="2x" />
                            </div>
                            <p style={{ marginLeft: '30px' }}>Der Kommunikative Kopfhörer</p>
                        </div>
                    )}
                    {/* similar blocks for the other pages */}
                </div>
            )}
        </div>
    );

}
export default DisplayPage;