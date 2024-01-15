import React from 'react';
import './MysteryMode.css'; // Import CSS file for styling
import { useState } from 'react';

const channel_one = {name: "moodysound_02"}
const channel_two = {name: "strangethingshappen"}

const channels_ = [channel_one, channel_two]


const MysteryMode = () => {

    const [channels, setChannels] = useState(channels_);
    const [listeners, setListeners] = useState(5);
    const [channelState, setChannelState] = useState("listening")
    const [currentChannel, setCurrentChannel] = useState("")

    const states = ["none", "listening", "hosting"];

    
    const handleChannel = (name) => {
        setCurrentChannel(name)
        setChannelState("listening")
    }

    const handleBack = () => {
        if(channelState === "listening" || channelState === "hosting") {
            setChannelState("none")
        }
    }

    const handleCreate = () => {
        //nur zum testen
        setChannelState("hosting")
    }

    const Channel = ({name}) => {
        return(
            <>
                <div className="channel-container">
                    <div>{name}</div>
                    <a onClick={() => handleChannel(name)}>➡️</a>
                </div>
    
            </>
        )
    }
   

    return (
        <>
            <div className="mystery-container">
                <div className="">
                    <div className="mystery-page">
                        <div className="hero">
                            <div className="mystery-header">
                                <a onClick={() => handleBack()}>Back</a>
                                <a>Help</a>
                            </div>
                            <div className="mystery-hero">
                                Mystery Music Share
                            </div>
                        </div>

                        <div className="content">
                            
                            {channelState === "none" && (
                                    <>
                                        <div className='listening-in-container'>
                                            <h3>Channels in your radius:</h3>
                                            <a onClick={() => handleCreate()}>➕</a>
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
                            {channelState === "listening" && (
                                    <>
                                        <h3>You are currently listening to:</h3>
                                        <h3>{currentChannel}</h3>
                                        
                                    </>
                                )
                            }
                            {channelState === "hosting" && (
                                    <>
                                        <div className="listening-in-container">
                                            <h3>People listening in: </h3>
                                            <h3 id="listenerNumber">{listeners}</h3>
                                        </div>
                                        <div>Teilen ↪️</div>

                       
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
