import React from 'react';
import './MysteryMode.css'; // Import CSS file for styling
import { useState, useEffect } from 'react';

const channel_one = {name: "moodysound_02"}
const channel_two = {name: "strangethingshappen"}

const channels_ = [channel_one, channel_two]


const MysteryMode = () => {

    const main_state = "main";
    const listening_state = "listening";
    const hosting_state = "hosting"; 
    const search_state = "search";


    const [channels, setChannels] = useState(channels_);
    const [listeners, setListeners] = useState(5);
    const [channelState, setChannelState] = useState(main_state)
    const [currentChannel, setCurrentChannel] = useState("")

    const [isHelpOpen, setHelpOpen] = useState(false);
    const [isNamingOpen, setNamingOpen] = useState(false);
    
    const [channelName, setChannelName] = useState(""); 

    const handleHelp = () => {
        setHelpOpen(!isHelpOpen)
    }    

    const handleBack = () => {
        if (channelState === listening_state) {
            setChannelState(search_state);
        } else if (channelState != main_state) {
            setChannelState(main_state)
        }
    }

    const handleCreateChannel = () => {
        setChannelState(hosting_state)
        setNamingOpen(true); 
    }
    const handleSearchChannel = () => {
        setChannelState(search_state)
    }

    const handleJoinChannel = (name) => {
        setCurrentChannel(name)
        setChannelState(listening_state)
    }

    const Channel = ({name}) => {
        return(
            <>
            {/** 
                <a onClick={() => handleJoinChannel(name)} className="channel-container">
                    <div>{name}</div>
                    <a onClick={() => handleJoinChannel(name)}>➡️</a>
                </a>
                */}
                <a onClick={() => handleJoinChannel(name)} className="channel-container">
                    <div>{name}</div>
                    ➡️
                </a>

            </>
        )
    }

    const HelpPopup  = () => {
        
        return(
            <>
                <div className="popup-container help-container">
                    <p>
                        If you want to host your music to nearby devices you can click choose "Create a channel"
                        If you want to join a channel hosted by other, "Join a channel".
                        Maybe add an if condition based on current state of the app. show different information regarding each functionality, or just explain mystery music share in general? 
                    </p>
                    <button onClick={() => setHelpOpen(false)}>
                        Ok
                    </button>
                </div>
            </>
        )
    }

    const NamingPopup = () => {

        const [channelInputValue, setChannelInputValue] = useState(""); 

        const handleSubmit = () => {
            setChannelName(channelInputValue);
            setNamingOpen(false);
        }

        const handleCancel = () => {
            setNamingOpen(false);
            setChannelState(main_state);
        }

        const handleInputChange = (e) => {
            setChannelInputValue(e.target.value); 
        }

        return(
            <>
                <div className="popup-container naming-container">
                    <div>
                        <input 
                        placeholders="Name for channel" 
                        type="text"
                        value={channelInputValue}
                        onChange={handleInputChange}/>               
                    </div>
                    <div>
                        <button onClick={() => handleSubmit()}>
                            ✅Ok
                        </button>
                        <button onClick={() => handleCancel()}>
                            ❌Cancel
                        </button>

                    </div>
                </div>
            </>
        )
    }

    return (
        <>  

            {isHelpOpen && <HelpPopup/>}
            {isNamingOpen && <NamingPopup/>}

            <div className="mystery-container">
                <div className="">
                    <div className="mystery-page">
                        <div className="hero">
                            <div className="mystery-header">
                                <a onClick={() => handleBack()}>⬅️ Back</a>
                                <a onClick={() => handleHelp()}>Help❓</a>
                            </div>
                            <div className="mystery-hero">
                                Mystery Music Share
                            </div>
                        </div>

                        <div className="content">
                            
                            {channelState === search_state && (
                                    <>
                                        <div className='listening-in-container'>
                                            <h3>Channels in your radius:</h3>
                                        </div>
                                        <div className="lobby-list">
                                            {
                                                channels.map(
                                                    channel => (
                                                        <Channel name={channel.name}/>
                                                    )
            
                                                )
                                            }
                                        </div>
                                    </>
                                )
                            }
                            {channelState === listening_state && (
                                    <>
                                        <h3>You are currently listening to:</h3>
                                        <h3>{currentChannel}</h3>
                                        
                                    </>
                                )
                            }
                            {channelState === hosting_state && (
                                    <>
                                        <h3>{channelName}</h3>
                                        <div className="listening-in-container">
                                            <h3>People listening in: </h3>
                                            <h3 id="listenerNumber">{listeners}</h3>
                                        </div>
                                        <div>Teilen ↪️</div>

                       
                                    </>
                                )
                            }
                            {channelState === main_state && (
                                    <>
                                        <div className="main-container">
                                            <button onClick={() => handleSearchChannel()}>Join a channel</button>
                                            <button onClick={() => handleCreateChannel()}>Create a channel</button>
                                        </div>

                       
                                    </>
                                )
                            }
                                
                            
                                      
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};
export default MysteryMode;
